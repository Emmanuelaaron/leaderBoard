const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9GFpJH58W0GP2nThYOqo/scores';

async function getScores() {
  const promise = new Promise((res) => {
    request.open('GET', requestURL);
    request.onload = () => {
      if (request.status === 200) {
        res(request.response);
      } else {
        res('Error');
      }
    };
    request.send();
  });
  const list = JSON.parse(await promise);

  return list;
}

export default getScores;