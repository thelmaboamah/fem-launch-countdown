const daysContainer = document.getElementById("days");
const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const futureDate = getFutureDate(14);
let intervalId;

function startCountdown() {
  if (!intervalId) {
    intervalId = setInterval(countDown, 1000);
  }
}

function countDown() {
  let timeRemaining = futureDate - Date.now();
  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  daysContainer.textContent = formattedNum(days);
  hoursContainer.textContent = formattedNum(hours);
  minutesContainer.textContent = formattedNum(minutes);
  secondsContainer.textContent = formattedNum(seconds);
}

// Helpers
function getFutureDate(days) {
  const now = new Date();
  return now.setDate(now.getDate() + days);
}

function formattedNum(num) {
  return num < 10 ? `0${num}` : num;
}

// On load
startCountdown();
