import { fetchData } from "./pokedex/fetchPokemons.js";
import { startGame } from "./game/startGame.js";
import { clearContainer } from "./utilsGlobal.js";

let init = true;

export function btns() {
  const buttons = document.querySelectorAll(".btn");

  buttons[0].addEventListener("click", handleData);
  buttons[1].addEventListener("click", handleGame);

  function handleData() {
    if (init) {
      clearContainer();
      fetchData(0);
      init = false;
    }
  }

  function handleGame() {
    init = true;
    clearContainer();
    startGame();
  }
}
