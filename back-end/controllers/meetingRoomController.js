const express = require("express");
const res = require("express/lib/response");
const rooms = express.Router();
const {
  getAllRooms,
  getOneRoom,
  createRoom,
  getBookings,
  createBooking,
} = require("../queries/meetingRooms.js");

rooms.get("/", async (req, res) => {
  const allRooms = await getAllRooms();
  if (allRooms[0]) {
    res.status(200).json(allRooms);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

rooms.get("/:room_id", async (req, res) => {
  const { room_id } = req.params;
  const oneRoom = await getOneRoom(room_id);
  if (oneRoom) {
    res.status(200).json(oneRoom);
  } else {
    res.status(404).json({ error: "Room Unavailable" });
  }
});

rooms.post("/", async (req, res) => {
  const newRoom = await createRoom(req.body);
  if (newRoom) {
    res.status(200).json(newRoom);
  } else {
    res.status(400).json({ error: error });
  }
});

rooms.get("/:room_id/bookings", async (req, res) => {
  const { room_id, meeting_id } = req.params;
  try {
    const meetingsBooked = await getBookings(room_id, meeting_id);
    if (meetingsBooked[0]) {
      res.status(200).json(meetingsBooked);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

rooms.post("/:room_id/bookings", async (req, res) => {
  const newBooking = await createBooking(req.body);
  if (newBooking) {
    res.status(200).json(newBooking);
  } else {
    res.status(400).json({ error: error });
  }
});

module.exports = rooms;
