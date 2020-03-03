const baseEndPoint = 'https://icanhazdadjoke.com/';

const headerApiJoke = {
  headers: {
    Accept: 'application/json',
  },
};

export async function fetchJoke() {
  const response = await fetch(`${baseEndPoint}`, headerApiJoke);
  const data = await response.json();
  return data;
}
