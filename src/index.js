import './style.css';

import {
  refreshBtn, form, userName, userScore,
} from './variables.js';

import submit from './submit.js';
import render from './render.js';

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  render();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submit(userName, userScore);
});
