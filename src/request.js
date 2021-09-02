/* eslint-disable import/no-cycle */

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9GFpJH58W0GP2nThYOqo/scores';

const getScores = async () => {
  const response = await fetch(requestURL);
  const list = await response.json();
  return list;
};

const scoreAddition = async (nameInput, scoreInput) => {
  const postData = {
    user: nameInput,
    score: scoreInput,
  };
  const response = await fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(postData),
  });
  const res = await response.json();
  return res;
};
export { getScores, scoreAddition };