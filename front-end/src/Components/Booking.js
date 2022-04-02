import React from "react";
import { Link } from "react-router-dom";

function Booking({ booking }) {
  return (
    <div>
      <Link to={`/bookings/${booking.meeting_id}`}>
        <h1>{booking.meeting_name}</h1>
      </Link>
      <p>
        {booking.start_date} {booking.start_time}
      </p>
      <p>
        {booking.end_date} {booking.end_time}
      </p>
    </div>
  );
}

export default Booking;
