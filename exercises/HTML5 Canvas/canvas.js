const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);
}

window.addEventListener('mousemove', draw);
window.addEventListener('mousedown', () => (isDrawing = true));
window.addEventListener('mouseup', () => (isDrawing = false));
window.addEventListener('mouseout', () => (isDrawing = false));
