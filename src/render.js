import leaderBoard from "./leaderBoard.js";
import { renderSection } from "./variables.js";

const render = async () => {
  const scoreOfPlayers = await leaderBoard.refreshScore();
  renderSection.innerHTML = "";
  for (let i = 0; i < scoreOfPlayers?.length; i += 1) {
    renderSection.innerHTML += `<li d-flex input-list><span>${scoreOfPlayers[i].user} : </span> <span>${scoreOfPlayers[i].score}</span> </li>`;
  }
};
export { render }; //eslint-disable-line
