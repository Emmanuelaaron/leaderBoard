const myScores = [
  { name: 'Name', scores: 20 },
  { name: 'Name', scores: 20 },
  { name: 'Name', scores: 20 },
  { name: 'Name', scores: 20 },
  { name: 'Name', scores: 20 },
];
const scores = () => {
  const res = document.createElement('div');
  res.classList.add('col-5');

  const header = document.createElement('div');
  header.classList.add('d-flex', 'justify-content-between');

  const heading = document.createElement('h3');
  heading.innerText = 'Recent Scores';

  const refreshBtn = document.createElement('button');
  refreshBtn.innerText = 'Refresh';
  refreshBtn.classList.add('btn', 'btn-secondary');

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'mt-5', 'table-hover', 'border', 'border-dark', 'border-4', 'table-borderless');

  const tBody = document.createElement('tbody');

  myScores.forEach((score) => {
    const tRow = document.createElement('tr');
    const scoreName = document.createElement('td');
    const scoreValue = document.createElement('td');
    scoreName.innerText = score.name;
    scoreValue.innerText = score.scores;

    tRow.appendChild(scoreName);
    tRow.appendChild(scoreValue);
    tBody.appendChild(tRow);
    table.appendChild(tBody);
  });

  table.appendChild(tBody);

  header.appendChild(heading);
  header.appendChild(refreshBtn);

  res.appendChild(header);
  res.appendChild(table);

  return res;
};

export default scores;