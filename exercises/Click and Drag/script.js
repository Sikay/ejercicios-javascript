const slider = document.querySelector('.items');
let isDown = true;

slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', () => {
  console.log(isDown);
});
