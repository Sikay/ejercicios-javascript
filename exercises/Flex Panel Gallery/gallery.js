const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.add('open'); // Utilizamos this para referirnos a panel
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
