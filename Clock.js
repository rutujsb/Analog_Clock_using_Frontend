const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // Calculate second hand rotation
  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  // Calculate minute hand rotation
  const minute = now.getMinutes();
  const minDegree = (minute / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  // Calculate hour hand rotation
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90 + minute / 2;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

// Call the setDate function every second to update the clock
setInterval(setDate, 1000);
