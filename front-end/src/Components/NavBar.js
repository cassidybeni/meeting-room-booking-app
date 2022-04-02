import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Meeting Rooms</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/meetingrooms/new">New Room</Link>
    </nav>
  );
}

export default NavBar;
