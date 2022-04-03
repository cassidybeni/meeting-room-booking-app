import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import "./NewRoomForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = apiURL();

function NewRoomForm(props) {
  const [newRoom, setRoom] = useState({
    room_id: 0,
    room_name: "",
    capacity: 0,
    floor: 0,
  });
  const history = useNavigate();

  const addRoom = (newRoom) => {
    try {
      axios.post(`${API}/meeting-rooms`, newRoom).then(
        (res) => {
          setRoom(res.data);
          history(`/`);
        },
        (error) => console.error(error)
      );
    } catch (error) {
      toast.warning("Room cannot be created", { autoClose: false });
    }
  };

  const handleTextChange = (e) => {
    setRoom({ ...newRoom, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoom(newRoom);
  };

  //todo: pops up after successful submission
  toast.success("Room Successfully Created", { autoClose: false });

  return (
    <div className="NewRoomForm">
      <form onSubmit={handleSubmit}>
        <label>Room Name:</label>
        <input
          id="room_name"
          type="text"
          required
          value={newRoom.room_name}
          placeholder="Room Name"
          onChange={handleTextChange}
        />
        <label>Floor:</label>
        <input
          id="floor"
          type="number"
          required
          value={newRoom.floor}
          placeholder="Floor"
          onChange={handleTextChange}
        />
        <label>Capacity:</label>
        <input
          id="capacity"
          type="number"
          required
          value={newRoom.capacity}
          placeholder="Capacity"
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
}

export default NewRoomForm;
