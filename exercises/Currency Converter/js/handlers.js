import { formatCurrency } from './utils';
import { convertMoney } from './lib';
import { fromAmount, fromSelect, toSelect, toAmount } from './elements';

export async function handleInput() {
  const rawAmount = await convertMoney(
    fromAmount.value,
    fromSelect.value,
    toSelect.value
  );
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
