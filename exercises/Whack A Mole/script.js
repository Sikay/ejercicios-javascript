const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holeElements) {
  const index = Math.floor(Math.random() * holeElements.length);
  const hole = holeElements[index];
  if (hole === lastHole) {
    return randomHole(holeElements);
  }
  lastHole = hole;
  return hole;
}
