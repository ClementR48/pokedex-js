import { initList } from "./listPokemon.js";
import { drawPokemon } from "./pokemon.js";

let limit = 20;
export const fetchData = (offset) => {
  initList();
  try {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
        offset * limit
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let pokemons = result.results;
        pokemons.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => {
              return res.json();
            })
            .then((dataPokemons) => {
              drawPokemon(dataPokemons);
            });
        });
      });
  } catch (error) {
    console.log(error);
  }
};
