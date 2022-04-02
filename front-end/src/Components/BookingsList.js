import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import Booking from "../Components/Booking";

const API = apiURL();

function BookingsList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/bookings`)
      .then(
        (res) => {
          setBookings(res.data);
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
      {bookings.map((booking) => {
        return <Booking key={booking.meeting_id} booking={booking} />;
      })}
    </div>
  );
}

export default BookingsList;
