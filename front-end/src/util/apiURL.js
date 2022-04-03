export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://safe-citadel-01212.herokuapp.com";
};
