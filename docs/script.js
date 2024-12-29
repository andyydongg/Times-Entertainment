function updateClock() {
    const now = new Date();
    const estTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    let hours = estTime.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = estTime.getMinutes().toString().padStart(2, '0');
    const seconds = estTime.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById('clock').textContent = timeString;

    const month = (estTime.getMonth() + 1).toString().padStart(2, '0');
    const day = estTime.getDate().toString().padStart(2, '0');
    const year = estTime.getFullYear();
    const dateString = `${month}/${day}/${year}`;
    document.getElementById('calendar').textContent = dateString;
  }

  setInterval(updateClock, 1000);

  let familySafe = true; // Set it to true initially

function toggleFamilySafe() {
familySafe = !familySafe;
const familySafeStatus = document.getElementById('familySafeStatus');
familySafeStatus.textContent = familySafe ? 'ON' : 'OFF';

// Search through all cards and show/hide based on the id
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const cardId = card.id;
  if (cardId === '13+') {
      card.style.display = familySafe ? 'none' : 'flex'; // Show or hide the card
  }
});
}
