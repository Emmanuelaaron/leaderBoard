import 'bootstrap';
import './scss/style.scss';
import scores from './scores';
import addScore from './addScore';

function component() {
  const element = document.createElement('main');
  const heading = document.createElement('h1');
  heading.classList.add('ms-5', 'mt-4', 'mb-5');
  heading.innerHTML = 'LeaderBoard';

  const content = document.createElement('section');
  content.classList.add('col-12', 'container', 'd-flex', 'justify-content-around');
  content.appendChild(scores());
  content.appendChild(addScore());

  element.appendChild(heading);
  element.appendChild(content);

  return element;
}

document.body.appendChild(component());
