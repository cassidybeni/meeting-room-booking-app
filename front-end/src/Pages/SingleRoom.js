import React from "react";
import RoomDetails from "../Components/RoomDetails";
import NewBookingForm from "../Components/NewBookingForm";
import RoomBookings from "../Components/RoomBookings";

function SingleRoom() {
  return (
    <div>
      <RoomDetails />
      <NewBookingForm />
      <RoomBookings />
    </div>
  );
}

export default SingleRoom;
