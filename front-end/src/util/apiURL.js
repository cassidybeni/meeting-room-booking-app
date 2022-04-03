export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://hidden-waters-94387.herokuapp.com";
};
