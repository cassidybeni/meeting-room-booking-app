DROP DATABASE IF EXISTS meeting_room_bookings_dev;
CREATE DATABASE meeting_room_bookings_dev;

\c meeting_room_bookings_dev;

CREATE TABLE meeting_rooms (
    room_id SERIAL PRIMARY KEY,
    room_name TEXT NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL,
    available BOOLEAN
);

CREATE TABLE bookings (
    room_id SERIAL PRIMARY KEY,
    meeting_name TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    attendees TEXT
);