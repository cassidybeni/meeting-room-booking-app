import React from "react";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import Room from "../Components/Room";

const API = apiURL();

function MeetingRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/meeting-rooms`)
      .then(
        (res) => {
          setRooms(res.data);
        },
        (e) => {
          console.log("axios error", e);
        }
      )
      .catch((e) => {
        console.log("caught", e);
      });
  }, []);

  return (
    <div>
      {rooms.map((room) => {
        return <Room key={room.room_name} room={room} />;
      })}
    </div>
  );
}

export default MeetingRooms;
