export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://meeting-room-booking-api.herokuapp.com";
};
