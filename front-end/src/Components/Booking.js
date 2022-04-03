import React from "react";
import { Link } from "react-router-dom";

function Booking({ booking }) {
  return (
    <div>
      <Link to={`/bookings/${booking.meeting_id}`}>
        <h1>{booking.meeting_name}</h1>
      </Link>
      <h2>
        Start: {Date(booking.start_date)} {booking.start_time}
      </h2>
      <h2>
        End: {Date(booking.end_date)} {booking.end_time}
      </h2>
    </div>
  );
}

export default Booking;
