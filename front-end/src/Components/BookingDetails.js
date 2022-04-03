import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = apiURL();

function BookingDetails() {
  const [booking, setBooking] = useState([]);

  const { meeting_id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/bookings/${meeting_id}`)
      .then((res) => {
        setBooking(res.data);
      })
      .catch((e) => {
        console.error(e);
        history("/not-found");
      });
  }, [history, meeting_id]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${API}/bookings/${meeting_id}`);
      history("/bookings");
      setBooking(res.data);
    } catch (error) {
      toast.warning("Cancellation Unsuccessful", { autoClose: false });
    }
  };

  //todo: pop up after deletion
  toast.success("Cancellation Successful", { autoClose: false });

  return (
    <div>
      <h1>{booking.meeting_name}</h1>
      <button onClick={handleDelete}>Cancel Meeting</button>
      <ToastContainer />
    </div>
  );
}

export default BookingDetails;
