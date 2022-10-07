import { choosePokemon } from "./user/choosePokemon.js";
import { map } from "./startGame/map.js";
import { formulaireUser } from "./user/form.js";

export function startGame() {
  if (!localStorage.getItem("nameUser")) {
    formulaireUser();
  } else {
    if (!localStorage.getItem("pokemon")) {
      choosePokemon();
    } else {
      map();
    }
  }
}
