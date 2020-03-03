import { init } from './js/init.js';

const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });
