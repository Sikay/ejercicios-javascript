const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const totalDegrees = 360;
const startDegrees = 90;

function secondsToDegrees(seconds) {
  const secondsDegrees = (seconds / 60) * totalDegrees + startDegrees;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function minsToDegrees(mins) {
  const minsDegrees = (mins / 60) * totalDegrees + startDegrees;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
}

function hoursToDegrees(hours) {
  const hoursDegrees = (hours / 12) * totalDegrees + startDegrees;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setClockTime() {
  const now = new Date();
  secondsToDegrees(now.getSeconds());
  minsToDegrees(now.getMinutes());
  hoursToDegrees(now.getHours());
}

setInterval(setClockTime, 1000);
