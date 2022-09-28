import { btns } from "./modules/buttons.js";
import { fetchData } from "./modules/fetchPokemons.js";

let offset = 0;

function initApp() {
  btns(offset);
  if (localStorage.getItem("pokemon")) {
    const imgPokemonHeader = document.querySelector(".img_pokemon_header");
    imgPokemonHeader.setAttribute(
      "src",
      JSON.parse(localStorage.getItem("pokemon")).sprites.front_default
    );
  }
  if (localStorage.getItem("nameUser") && localStorage.getItem("imgUser")) {
    const headerName = document.querySelector(".name_user");
    headerName.textContent = localStorage.getItem("nameUser");
    const imgUser = document.querySelector(".img-user");
    imgUser.setAttribute("src", localStorage.getItem("imgUser"));
  } else {
    const headerName = document.querySelector(".name_user");
    headerName.textContent = "";
    const imgUser = document.querySelector(".img-user");
    imgUser.setAttribute("src", "../assets/toto.jpg");
  }
}
initApp();

window.onscroll = function () {
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight + 16
  ) {
    offset++;
    fetchData(offset);
  }
};
