import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
const API = apiURL();

function NewRoomForm() {
  let history = useNavigate();

  const addRoom = (newRoom) => {
    axios
      .post(`${API}/meeting-rooms`, newRoom)
      .then(
        () => {
          history.push(`/meeting-rooms`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [room, setRoom] = useState({
    room_name: "",
    capacity: 0,
    floor: 0,
    available: false,
  });

  const handleTextChange = (e) => {
    setRoom({ ...room, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoom(room);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Room Name:</label>
        <input
          id="room_name"
          type="text"
          required
          value={room.room_name}
          placeholder="Room Name"
          onChange={handleTextChange}
        />
        <label>Floor:</label>
        <input
          id="floor"
          type="number"
          required
          value={room.floor}
          placeholder="Floor"
          onChange={handleTextChange}
        />
        <label>Capacity:</label>
        <input
          id="capacity"
          type="number"
          required
          value={room.capacity}
          placeholder="Capacity"
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewRoomForm;
