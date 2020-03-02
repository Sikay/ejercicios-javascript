const jokeButton = document.querySelector('.getJoke');
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
  console.log(data);
}

jokeButton.addEventListener('click', fetchJoke);
