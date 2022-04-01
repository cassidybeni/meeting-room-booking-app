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

module.exports = { getAllBookings };
