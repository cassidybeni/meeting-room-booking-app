import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import Room from "../Components/Room";
import { useParams } from "react-router-dom";

const API = apiURL();

function RoomBookings() {
  const [booked, setBooked] = useState([]);

  const { room_id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/meeting-rooms/${room_id}/bookings`)
      .then(
        (res) => {
          setBooked(res.data);
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
      {booked.map((meeting) => {
        return <Room key={meeting.meeting_id} meeting={meeting} />;
      })}
    </div>
  );
}

export default RoomBookings;
