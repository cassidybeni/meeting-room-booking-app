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

module.exports = { getAllBookings, getOneBooking };
