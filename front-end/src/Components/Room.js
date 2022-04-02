import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  return (
    <div>
      <Link to={`/meetingrooms/${room.room_id}`}>
        <h1>Room Name: {room.room_name}</h1>
      </Link>
      <p>Capacity: {room.capacity}</p>
      <p>Floor: {room.floor}</p>
    </div>
  );
}

export default Room;
