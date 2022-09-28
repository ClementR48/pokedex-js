import { initList } from "./listPokemon.js";
import { map } from "./map.js";
import { drawPokemon } from "./pokemon.js";

export function choosePokemon() {
  const idArr = [1, 4, 7];
  initList();

  for (let i = 0; i < idArr.length; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idArr[i]}/`)
      .then((res) => res.json())
      .then((data) => {
        drawPokemon(data);
        let pokemonstarter = document.querySelectorAll(".card-pokemon");
        for (let i = 0; i < pokemonstarter.length; i++) {
          if (Number(pokemonstarter[i].getAttribute("data-set")) === data.id) {
            pokemonstarter[i].addEventListener("click", handleChoosePokemon);
          }
        }
        function handleChoosePokemon() {
          localStorage.setItem("pokemon", JSON.stringify(data));
          document.querySelector(".container").innerHTML = "";
          const imgPokemonHeader = document.querySelector(
            ".img_pokemon_header"
          );

          imgPokemonHeader.setAttribute(
            "src",
            JSON.parse(localStorage.getItem("pokemon")).sprites.front_default
          );

          map();
        }
      });
  }
}
