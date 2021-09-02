/* eslint-disable import/no-cycle */

import scores from './scores';
import addScore from './addScore';

const component = async () => {
  const element = document.createElement('main');
  const heading = document.createElement('h1');
  heading.classList.add('ms-5', 'mt-4', 'mb-5');
  heading.innerHTML = 'LeaderBoard';

  const content = document.createElement('section');
  content.classList.add('col-12', 'container', 'd-flex', 'justify-content-around', 'flex-wrap-reverse');
  content.appendChild(await scores());
  content.appendChild(addScore());

  element.appendChild(heading);
  element.appendChild(content);

  return element;
};

async function display() {
  document.body.appendChild(await component());
}

export default display;