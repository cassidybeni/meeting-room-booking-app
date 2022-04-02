import React from "react";

function Booking({ booking }) {
  return (
    <div>
      <h1>{booking.meeting_name}</h1>
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
