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
    meeting_id SERIAL PRIMARY KEY,
    room_name TEXT NOT NULL,
    meeting_name TEXT NOT NULL,
    start_date DATE,
    end_date DATE,
    start_time TIME,
    end_time TIME,
    floor INT
);