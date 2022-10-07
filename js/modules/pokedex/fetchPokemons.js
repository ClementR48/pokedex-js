import { initList } from "./listPokemon.js";
import { Pokemon } from "./pokemon.js";


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
              let pokemon = new Pokemon(dataPokemons)
              pokemon.drawPokemon()
              
            });
        });
      });
  } catch (error) {
    console.log(error);
  }
};
