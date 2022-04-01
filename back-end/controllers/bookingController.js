const express = require("express");
const bookings = express.Router();
const { getAllBookings, getOneBooking } = require("../queries/bookings");

bookings.get("/", async (req, res) => {
  const allBookings = await getAllBookings();
  if (allBookings[0]) {
    res.status(200).json(allBookings);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

bookings.get("/:meeting_id", async (req, res) => {
  const { meeting_id } = req.params;
  try {
    const oneBooking = await getOneBooking(meeting_id);
    if (oneBooking) {
      res.status(200).json(oneBooking);
    }
  } catch (error) {
    res.status(404).json({ error: "Appointment not found." });
  }
});

module.exports = bookings;
