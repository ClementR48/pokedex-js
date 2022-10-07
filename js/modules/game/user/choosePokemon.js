import { initList } from "../../pokedex/listPokemon.js";

import { Pokemon } from "../../pokedex/pokemon.js";
import { pokemonChoosen } from "./pokemonChoosen.js";

export function choosePokemon() {
  const idArr = [1, 4, 701];
  initList();

  for (let i = 0; i < idArr.length; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idArr[i]}/`)
      .then((res) => res.json())
      .then((data) => {
        let pokemon = new Pokemon(data);
        pokemon.drawPokemon();
        pokemonChoosen(data);
      });
  }
}
