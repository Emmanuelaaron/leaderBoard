import 'bootstrap';
import './scss/style.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'LeaderBoard';
  element.classList.add('bg-info');

  return element;
}

document.body.appendChild(component());
