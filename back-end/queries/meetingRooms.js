const db = require("../db/dbConfig");

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
    const oneRoom = db.one("SELECT * FROM bookings WHERE room_id=$1", room_id);
    return oneRoom;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRooms,
  getOneRoom,
};
