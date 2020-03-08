const slider = document.querySelector('.items');
let isDown = true;
let startX;
let scrollLeft;

function handleMouseDown(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
  console.log(scrollLeft);
}

function handleMouseIsNotDown() {
  isDown = false;
  slider.classList.remove('active');
}

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseIsNotDown);
slider.addEventListener('mouseup', handleMouseIsNotDown);
slider.addEventListener('mousemove', () => {
  if (!isDown) return;
  console.log(isDown);
});
