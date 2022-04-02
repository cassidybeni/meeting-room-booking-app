import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function RoomDetails() {
  const [room, setRoom] = useState([]);

  const { room_id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/meeting-rooms/${room_id}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((e) => {
        console.error(e);
        history("/not-found");
      });
  }, [history, room_id]);

  return (
    <div>
      <h1>{room.room_name}</h1>
      <p>Capacity: {room.capacity}</p>
      <p>Floor: {room.floor}</p>
    </div>
  );
}

export default RoomDetails;
