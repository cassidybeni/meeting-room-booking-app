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
      "INSERT INTO bookings (meeting_id, room_id, meeting_name, start_date, end_date, start_time, end_time, attendees) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        booking.meeting_id,
        booking.room_id,
        booking.meeting_name,
        booking.start_date,
        booking.end_date,
        booking.start_time,
        booking.end_time,
        booking.attendees,
      ]
    );
    return newBooking;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteBooking = async (meeting_id) => {
  try {
    const deletedBooking = await db.one(
      "DELETE FROM bookings WHERE meeting_id=$1 RETURNING *;",
      meeting_id
    );
    return deletedBooking;
  } catch (error) {
    return error;
  }
};

const updateBooking = async (meeting_id, booking) => {
  try {
    const updatedBooking = await db.one(
      "UPDATE bookings SET room_id=$1, meeting_name=$2, start_date=$3, end_date=$4, start_time=$5, end_time=$6, attendees=$7 WHERE meeting_id=$8 RETURNING *",
      [
        booking.room_id,
        booking.meeting_name,
        booking.start_date,
        booking.end_date,
        booking.start_time,
        booking.end_time,
        booking.attendees,
        meeting_id,
      ]
    );
    return updatedBooking;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBookings,
  getOneBooking,
  createBooking,
  deleteBooking,
  updateBooking,
};
