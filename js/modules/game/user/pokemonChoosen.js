import { map } from "../startGame/map.js";

export const pokemonChoosen = (data) => {
  let pokemonstarter = document.querySelectorAll(".card-pokemon");
  for (let i = 0; i < pokemonstarter.length; i++) {
    if (Number(pokemonstarter[i].getAttribute("data-set")) === data.id) {
      pokemonstarter[i].addEventListener("click", handleChoosePokemon);
    }
  }
  function handleChoosePokemon() {
    localStorage.setItem("pokemon", JSON.stringify(data));
    document.querySelector(".container").innerHTML = "";
    const imgPokemonHeader = document.querySelector(".img_pokemon_header");

    imgPokemonHeader.setAttribute(
      "src",
      JSON.parse(localStorage.getItem("pokemon")).sprites.front_default
    );

    map();
  }
};
