const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  const inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
