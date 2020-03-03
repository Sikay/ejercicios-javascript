import { buttonText } from './data/buttonText.js';
import { randomItemFromArray } from './utils.js';
import { fetchJoke } from './lib.js';
import { jokeHandle, jokeButton } from './elements.js';

export async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHandle.textContent = joke;
  const reaction = randomItemFromArray(buttonText, jokeButton.textContent);
  jokeButton.textContent = reaction;
}
