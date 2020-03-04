const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function secondsToDegrees(seconds) {
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function minsToDegrees(mins) {
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
}

function hoursToDegrees(hours) {
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setClockTime() {
  const now = new Date();
  secondsToDegrees(now.getSeconds());
  minsToDegrees(now.getMinutes());
  hoursToDegrees(now.getHours());
}

setInterval(setClockTime, 1000);
