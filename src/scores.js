import getScores from './request';
// const myScores = [
//   { user: 'Name', score: 20 },
//   { user: 'Name', score: 20 },
//   { user: 'Name', score: 20 },
//   { user: 'Name', score: 20 },
//   { user: 'Name', score: 20 },
// ];
// const bu =

// async function getResult() {
//   const data = await getScores()
//       console.log("daatata", data)

// }
// console.log("returned",getResult())

// let myScores = getResult()
async function scores() {
  const myScores = await getScores();
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

  header.appendChild(heading);
  header.appendChild(refreshBtn);

  res.appendChild(header);
  res.appendChild(table);

  return res;
}

export default scores;