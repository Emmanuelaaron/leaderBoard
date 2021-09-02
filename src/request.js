import display from "./bodyComponent";

const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9GFpJH58W0GP2nThYOqo/scores';


async function getScores(){
  const response = await fetch(requestURL)
  const list = await response.json()
  console.log("ftech console",list)
  return list
}

const scoreAddition = (nameInput, scoreInput) => {
  let postData = {
    "user": nameInput,
    "score": scoreInput
  }
  fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }, 
    body: JSON.stringify(postData)
  })
  .then((response) => response.json())
  .then((message) => {
    if(message.result === "Leaderboard score created correctly."){
      document.body.innerHTML = ''
      display()
    }

  })
  
}
export { getScores, scoreAddition };