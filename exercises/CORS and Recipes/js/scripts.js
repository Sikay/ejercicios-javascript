const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

function displayRecipes(recipes) {
  const html = recipes.map(
    recipe => `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
        <a href="${recipe.href}">View Recipe →</a>
      </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

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
  formElement.submit.disabled = false;
  displayRecipes(recipes.results);
}

form.addEventListener('submit', handleSubmit);
