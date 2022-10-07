import { fetchData } from "./pokedex/fetchPokemons.js";

export const scroll = (offset) => {
  window.onscroll = function () {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight + 16
    ) {
      offset++;
      fetchData(offset);
    }
  };
}