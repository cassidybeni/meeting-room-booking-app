\c meeting_room_bookings_dev;

INSERT INTO meeting_rooms (room_name, capacity, floor) VALUES
('Meeting Room 1', 6, 22),
('Boardroom 2', 12, 21),
('HUB', 30, 22);

INSERT INTO bookings (meeting_name, start_date, end_date, start_time, end_time, attendees) VALUES
('Team Alpha - Scrum Standup', '2022-03-30',  '2022-03-30', '09:30:00', '09:45:00','john@gmail.com, jane@gmail.com, jack@gmail.com'),
('Project Eureka - Requirements Gathering', '2022-03-30',  '2022-03-30', '02:00:00', '03:00:00', 'john@gmail.com'),
('Star Team - Backlog Refinement', '2022-03-29', '2022-03-30', '10:00:00','11:00:00', 'jane@gmail.com, jack@gmail.com');