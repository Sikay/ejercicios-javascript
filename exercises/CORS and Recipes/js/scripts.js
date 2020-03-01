const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');

async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const recipes = await response.json();
  return recipes;
}

async function handleSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget;
  formElement.submit.disabled = true;
  const recipes = await fetchRecipes(formElement.query.value);
  console.log(recipes);
  formElement.submit.disabled = false;
}

form.addEventListener('submit', handleSubmit);
