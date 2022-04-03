import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import RoomBooking from "./RoomBooking.js";
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
  }, [room_id]);

  return (
    <div>
      {booked.map((meeting) => {
        return <RoomBooking key={meeting.meeting_id} meeting={meeting} />;
      })}
    </div>
  );
}

export default RoomBookings;
