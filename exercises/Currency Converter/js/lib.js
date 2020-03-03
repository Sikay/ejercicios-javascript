const baseEndpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const response = await fetch(`${baseEndpoint}?base=${base}`);
  const rates = await response.json();
  return rates;
}

export async function convertMoney(amount, from, to) {
  if (!ratesByBase[from]) {
    ratesByBase[from] = await fetchRates(from);
  }
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
