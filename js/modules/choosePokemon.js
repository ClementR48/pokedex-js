import { initList } from "./listPokemon.js";
import { drawPokemon } from "./pokemon.js";

export function choosePokemon() {
  
  initList();
  fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then((res) => res.json())
    .then((data) => {
      drawPokemon(data);
    });
  fetch("https://pokeapi.co/api/v2/pokemon/12/")
    .then((res) => res.json())
    .then((data) => {
      drawPokemon(data);
    });
  fetch("https://pokeapi.co/api/v2/pokemon/2/")
    .then((res) => res.json())
    .then((data) => {
      drawPokemon(data);
    });
}
