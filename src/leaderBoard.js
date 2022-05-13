const api =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SISlsj4W9saMade7JXRU/scores/";

const submitScore = (userName, userScore) =>
  fetch(api, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
  }).then((res) => res.json());

const refreshScore = () =>
  fetch(api)
    .then((res) => res.json())
    .then((res) => res.result);

export default { submitScore, refreshScore };
