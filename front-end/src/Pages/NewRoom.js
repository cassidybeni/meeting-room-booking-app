import React from "react";
import NewRoomForm from "../Components/NewRoomForm";

export default function NewRoom({ addRoom }) {
  return (
    <div>
      <h1>Create a Room</h1>
      <NewRoomForm addRoom={addRoom} />
    </div>
  );
}
