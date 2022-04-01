const express = require("express");
const rooms = express.Router();
const { getAllRooms, getOneRoom } = require("../queries/meetingRooms.js");

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

module.exports = rooms;
