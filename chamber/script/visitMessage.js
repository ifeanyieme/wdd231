const messageElement = document.getElementById("visit-message");
const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

if (!lastVisit) {
  messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - lastVisit;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) {
    messageElement.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageElement.textContent = "You last visited 1 day ago.";
  } else {
    messageElement.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);
