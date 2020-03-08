const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timeToPlay = 20000;
let lastHole;
let timeUp = false;
let score;

function randomTime(min, max) {
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

function peep() {
  const time = randomTime(300, 800);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), timeToPlay);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater
  score += 1;
  scoreBoard.textContent = score;
  this.offsetParent.classList.remove('up');
}

moles.forEach(mole => mole.addEventListener('click', bonk));
