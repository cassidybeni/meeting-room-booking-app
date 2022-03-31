DROP DATABASE IF EXISTS meeting_room_bookings_dev;
CREATE DATABASE meeting_room_bookings_dev;

\c meeting_room_bookings_dev;

CREATE TABLE meeting_rooms (
    id SERIAL PRIMARY KEY,
    room_name TEXT NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL,
    available_date DATE,
    available_start TIME,
    available_end TIME
);

CREATE TABLE booked (
    id SERIAL PRIMARY KEY,
    meeting_name TEXT NOT NULL,
    booked_date DATE,
    start_meeting TIME,
    end_meeting TIME
);