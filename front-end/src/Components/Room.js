import React from "react";
import { Link } from "react-router-dom";

function Room({ room, meeting }) {
  return (
    <div>
      <div>
        <Link to={`/meetingrooms/${room.room_id}`}>
          <h1>Room Name: {room.room_name}</h1>
        </Link>
        <p>Capacity: {room.capacity}</p>
        <p>Floor: {room.floor}</p>
      </div>
      <div>{/* <h1>{meeting.meeting_name}</h1> */}</div>
    </div>
  );
}

export default Room;
