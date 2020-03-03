import { formatCurrency } from './utils.js';
import { convertMoney } from './lib.js';
import { fromAmount, fromSelect, toSelect, toAmount } from './elements.js';

export async function handleInput() {
  const rawAmount = await convertMoney(
    fromAmount.value,
    fromSelect.value,
    toSelect.value
  );
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
