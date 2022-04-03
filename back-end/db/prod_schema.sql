DROP DATABASE IF EXISTS meeting_room_bookings_dev;
CREATE DATABASE meeting_room_bookings_dev;

\c da7jia088pr7vc;

CREATE TABLE meeting_rooms (
    room_id SERIAL PRIMARY KEY,
    room_name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
);

CREATE TABLE bookings (
    meeting_id SERIAL PRIMARY KEY,
    room_id SERIAL, CONSTRAINT fk_booked_rooms FOREIGN KEY(room_id) REFERENCES meeting_rooms(room_id) ON DELETE CASCADE,
    meeting_name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    attendees VARCHAR(255)
);