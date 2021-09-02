/* eslint-disable import/no-cycle */

import { scoreAddition } from './request';

const addScore = () => {
  const res = document.createElement('div');
  const heading = document.createElement('h3');
  heading.innerText = 'Add your Score';

  const scoreSuccess = document.createElement('h5');

  const form = document.createElement('form');
  form.classList.add('mt-5');

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Your Name';
  nameInput.required = true;
  nameInput.id = 'name';
  nameInput.classList.add('form-control');

  const scoreInput = document.createElement('input');
  scoreInput.placeholder = 'Your Score';
  scoreInput.required = true;
  scoreInput.type = 'number';
  scoreInput.id = 'score';
  scoreInput.classList.add('form-control');

  const submitDiv = document.createElement('div');
  submitDiv.classList.add('d-flex', 'justify-content-end');

  const submitInput = document.createElement('input');
  submitInput.type = 'submit';
  submitInput.value = 'Submit';
  submitInput.classList.add('submit', 'btn', 'btn-success', 'btn-sm');
  submitInput.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await scoreAddition(nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
    if (res.result === 'Leaderboard score created correctly.') {
      scoreSuccess.innerHTML = res.result;
      scoreSuccess.classList.remove('text-danger');
      scoreSuccess.classList.add('text-success');
    } else {
      scoreSuccess.innerHTML = res.message;
      scoreSuccess.classList.remove('text-success');
      scoreSuccess.classList.add('text-danger');
    }
  });

  const myBr = document.createElement('br');
  const myBr1 = document.createElement('br');

  submitDiv.appendChild(submitInput);

  form.appendChild(nameInput);
  form.appendChild(myBr);
  form.appendChild(scoreInput);
  form.appendChild(myBr1);
  form.appendChild(submitDiv);

  res.appendChild(heading);
  res.appendChild(scoreSuccess);
  res.appendChild(form);

  return res;
};

export default addScore;