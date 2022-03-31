\c meeting_room_bookings_dev;

INSERT INTO meeting_rooms (room_name, capacity, floor, available) VALUES
('Meeting Room 1', 6, 22, true),
('Boardroom 2', 12, 21, true),
('HUB', 30, 22, true);

INSERT INTO booked (meeting_room, meeting_name, start_date, end_date, start_meeting, end_meeting, floor) VALUES
('Boardroom 2', 'Team Alpha - Scrum Standup', '2022-03-30',  '2022-03-30', '09:30:00', '09:45:00', 21),
('Project Eureka - Requirements Gathering', 'Meeting Room 1', '2022-03-30',  '2022-03-30', '02:00:00', '03:00:00', 22),
('Star Team - Backlog Refinement', 'Boardroom 2', '2022-03-29', '2022-03-30', '10:00:00','11:00:00', 21);