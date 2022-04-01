const express = require("express");
const bookings = express.Router();
const { getAllBookings } = require("../queries/bookings");

bookings.get("/", async (req, res) => {
  const allBookings = await getAllBookings();
  if (allBookings[0]) {
    res.status(200).json(allBookings);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = bookings;
