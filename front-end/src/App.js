import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Bookings from "./Pages/Bookings";
import NewRoom from "./Pages/NewRoom";
import SingleBooking from "./Pages/SingleBooking";
import SingleRoom from "./Pages/SingleRoom";
import FourOhFour from "./Pages/FourOhFour";
import axios from "axios";
import { apiURL } from "./util/apiURL";
import { useEffect, useState } from "react";

const API = apiURL();

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/bookings`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route path="/meetingrooms/new" element={<NewRoom />} />
            <Route
              exact
              path="/meetingrooms/:room_id"
              element={<SingleRoom />}
            />
            <Route
              exact
              path="/bookings/:meeting_id"
              element={<SingleBooking />}
            />
            <Route exact path="*" element={<FourOhFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
