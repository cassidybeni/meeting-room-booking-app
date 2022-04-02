import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Bookings from "./Pages/Bookings";
import NewRoom from "./Pages/NewRoom";
import SingleBooking from "./Pages/SingleBooking";
import SingleRoom from "./Pages/SingleRoom";
// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route path="/meetingrooms/new" element={<NewRoom />} />
            <Route exact path="/meetingrooms/:id" element={<SingleRoom />} />
            <Route exact path="/bookings/:id" element={<SingleBooking />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
