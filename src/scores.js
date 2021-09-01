/* eslint-disable import/no-cycle */

import { getScores } from './request';
import display from './bodyComponent';

async function scores() {
  const myScores = await getScores();
  const res = document.createElement('div');
  res.classList.add('col-5');

  const tableDiv = document.createElement('div');
  tableDiv.classList.add('table-responsive');

  const header = document.createElement('div');
  header.classList.add('d-flex', 'justify-content-between');

  const heading = document.createElement('h3');
  heading.innerText = 'Recent Scores';

  const refreshBtn = document.createElement('button');
  refreshBtn.innerText = 'Refresh';
  refreshBtn.classList.add('btn', 'btn-secondary');

  refreshBtn.addEventListener('click', () => {
    document.body.innerHTML = '';
    display();
  });

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'mt-5', 'table-hover', 'border', 'border-dark', 'border-4', 'table-borderless');

  const tBody = document.createElement('tbody');

  myScores.result.forEach((myScore) => {
    const tRow = document.createElement('tr');
    const scoreName = document.createElement('td');
    const scoreValue = document.createElement('td');
    scoreName.innerText = myScore.user;
    scoreValue.innerText = myScore.score;

    tRow.appendChild(scoreName);
    tRow.appendChild(scoreValue);
    tBody.appendChild(tRow);
    table.appendChild(tBody);
  });

  table.appendChild(tBody);

  tableDiv.appendChild(table);

  header.appendChild(heading);
  header.appendChild(refreshBtn);

  res.appendChild(header);
  res.appendChild(tableDiv);

  return res;
}

export default scores;