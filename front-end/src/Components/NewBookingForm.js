import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NewBookingForm.css";

const API = apiURL();

function NewBookingForm() {
  const history = useNavigate();
  const { room_id } = useParams();
  const [newBooking, setBooking] = useState({
    meeting_id: 0,
    room_id: 0,
    meeting_name: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    attendees: "",
  });
  const addBooking = (newBooking) => {
    try {
      axios.post(`${API}/meeting-rooms/${room_id}/bookings`, newBooking).then(
        (res) => {
          setBooking(res.data);
          history(`/meeting-rooms/${room_id}/bookings`);
        },
        (error) => console.error(error)
      );
    } catch (error) {
      toast.warning("Room cannot be created", { autoClose: false });
    }
  };

  const handleChange = (e) => {
    setBooking({ ...newBooking, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(newBooking);
  };

  //todo: pops up after successful submission
  toast.success("Meeting Successfully Booked", { autoClose: false });

  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit}>
        <label>Meeting Name: </label>
        <input
          id="meeting_name"
          type="text"
          required
          placeholder="Meeting Name"
          value={newBooking.meeting_name}
          onChange={handleChange}
        />
        <label>Start Date: </label>
        <input
          id="start_date"
          type="date"
          required
          placeholder="Start Date"
          value={newBooking.start_date}
          onChange={handleChange}
        />
        <label>Start Time: </label>
        <input
          id="start_time"
          type="time"
          required
          placeholder="Start Time"
          value={newBooking.start_time}
          onChange={handleChange}
        />
        <label>End Date: </label>
        <input
          id="end_date"
          type="date"
          required
          placeholder="End Date"
          value={newBooking.end_date}
          onChange={handleChange}
        />
        <label>End Time: </label>
        <input
          id="end_time"
          type="time"
          required
          placeholder="End Time"
          value={newBooking.end_time}
          onChange={handleChange}
        />
        <label>Attendees</label>
        <input
          id="attendees"
          type="text"
          placeholder="Attendees"
          value={newBooking.attendees}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
}

export default NewBookingForm;
