import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';
import { fromSelect, toSelect } from './elements';

const form = document.querySelector('.app form');

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
