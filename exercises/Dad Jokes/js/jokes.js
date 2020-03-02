const jokeButton = document.querySelector('.getJoke');
const jokeHandle = document.querySelector('.joke p');
const baseEndPoint = 'https://icanhazdadjoke.com/';

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

const headerApiJoke = {
  headers: {
    Accept: 'application/json',
  },
};

async function fetchJoke() {
  const response = await fetch(`${baseEndPoint}`, headerApiJoke);
  const data = await response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHandle.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);
