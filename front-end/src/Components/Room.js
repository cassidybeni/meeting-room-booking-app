import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  return (
    <div>
      <div>
        <Link to={`/meetingrooms/${room.room_id}`}>
          <h1>Room Name: {room.room_name}</h1>
        </Link>
        <h2>Capacity: {room.capacity}</h2>
        <h2>Floor: {room.floor}</h2>
      </div>
    </div>
  );
}

export default Room;
