const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.add('open'); // Utilizamos this para referirnos a panel
}

function toggleActive() {
  this.classList.add('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
