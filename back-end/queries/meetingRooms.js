const db = require("../db/dbConfig");
const pgp = require("pg-promise")();

// INDEX
const getAllRooms = async () => {
  try {
    const allRooms = db.any("SELECT * FROM meeting_rooms");
    return allRooms;
  } catch (error) {
    return error;
  }
};

// SHOW
const getOneRoom = async (room_id) => {
  try {
    const oneRoom = db.one(
      "SELECT * FROM meeting_rooms WHERE room_id=$1",
      room_id
    );
    return oneRoom;
  } catch (error) {
    return error;
  }
};

// CREATE
const createRoom = async (room) => {
  try {
    const newRoom = await db.one(
      "INSERT INTO meeting_rooms (room_id, room_name, capacity, floor) VALUES ($1, $2, $3, $4) RETURNING *",
      [room.room_id, room.room_name, room.capacity, room.floor]
    );
    return newRoom;
  } catch (error) {
    return error;
  }
};

const getBookings = async (room_id) => {
  try {
    const allBookings = db.any(
      "SELECT * FROM bookings WHERE room_id=$1",
      room_id
    );
    return allBookings;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createRoom,
  getBookings,
};
