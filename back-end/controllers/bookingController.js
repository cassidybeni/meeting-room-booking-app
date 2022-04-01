const express = require("express");
const bookings = express.Router();
const {
  getAllBookings,
  getOneBooking,
  createBooking,
  deleteBooking,
  updateBooking,
} = require("../queries/bookings");

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
  const oneBooking = await getOneBooking(meeting_id);
  if (oneBooking) {
    res.status(200).json(oneBooking);
  } else {
    res.status(404).json({ error: "Appointment not found." });
  }
});

bookings.post("/", async (req, res) => {
  const newBooking = await createBooking(req.body);
  if (newBooking) {
    res.status(200).json(newBooking);
  } else {
    res.status(400).json({ error: error });
  }
});

bookings.delete("/:meeting_id", async (req, res) => {
  const { meeting_id } = req.params;
  const deletedBooking = await deleteBooking(meeting_id);
  if (deletedBooking) {
    res.status(200).json(deletedBooking);
  } else {
    res.status(400).json({ error: error });
  }
});

bookings.put("/:meeting_id", async (req, res) => {
  const { meeting_id } = req.params;
  const booking = req.body;
  try {
    const updatedBooking = await updateBooking(meeting_id, booking);
    if (updatedBooking.meeting_id) {
      res.status(200).json(updatedBooking);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = bookings;
