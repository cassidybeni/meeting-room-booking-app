// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const meetingRoomController = require("./controllers/meetingRoomController");
const bookingController = require("./controllers/bookingController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Meeting Room Booking App");
});

app.use("/meetingRooms", meetingRoomController);

app.use("/bookings", bookingController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
