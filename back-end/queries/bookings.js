const db = require("../db/dbConfig.js");
const pgp = require("pg-promise")();

// INDEX
const getAllBookings = async () => {
  try {
    const allBookings = db.any("SELECT * FROM bookings");
    return allBookings;
  } catch (error) {
    return error;
  }
};

// SHOW
const getOneBooking = async (meeting_id) => {
  try {
    const oneBooking = db.one(
      "SELECT * FROM bookings WHERE meeting_id=$1",
      meeting_id
    );
    return oneBooking;
  } catch (error) {
    return error;
  }
};

// CREATE
const createBooking = async (booking) => {
  try {
    const newBooking = await db.one(
      "INSERT INTO bookings (meeting_id, room_name, meeting_name, start_date, end_date, start_time, end_time, floor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        booking.meeting_id,
        booking.room_name,
        booking.meeting_name,
        booking.start_date,
        booking.end_date,
        booking.start_time,
        booking.end_time,
        booking.floor,
      ]
    );
    return newBooking;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllBookings, getOneBooking, createBooking };
