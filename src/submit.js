import leaderBoard from './leaderBoard.js';
import render from './render.js';

export default async function submit(userName, userScore) {
  const scoreParseToInt = parseInt(userScore.value, 10);
  if (userName.value !== '' && userScore.value !== '' && scoreParseToInt) {
    await leaderBoard.submitScore(userName.value, userScore.value);
    userName.value = '';
    userScore.value = '';
  } else {
    userName.value = '';
    userScore.value = '';
  }
}
