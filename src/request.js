/* eslint-disable import/no-cycle */

import display from './bodyComponent';

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9GFpJH58W0GP2nThYOqo/scores';

const getScores = async () => {
  const response = await fetch(requestURL);
  const list = await response.json();
  return list;
};

const scoreAddition = (nameInput, scoreInput) => {
  const postData = {
    user: nameInput,
    score: scoreInput,
  };
  fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((message) => {
      if (message.result === 'Leaderboard score created correctly.') {
        document.body.innerHTML = '';
        display();
      }
    });
};
export { getScores, scoreAddition };