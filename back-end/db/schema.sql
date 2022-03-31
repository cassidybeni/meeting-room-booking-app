DROP DATABASE IF EXISTS meeting_room_bookings_dev;
CREATE DATABASE meeting_room_bookings_dev;

\c meeting_room_bookings_dev;

CREATE TABLE meeting_rooms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL,
    meeting_date DATE,
    start_meeting TIME,
    end_meeting TIME
);