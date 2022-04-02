export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://rhubarb-surprise-12643.herokuapp.com";
};
