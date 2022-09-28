import { choosePokemon } from "./modules/choosePokemon.js";
import { formUser } from "./modules/form.js";
import { initList } from "./modules/listPokemon.js";
import { drawPokemon } from "./modules/pokemon.js";

let offset = 0;
let limit = 20;
let init = true;

const fetchData = () => {
  initList();
  try {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset * limit}`
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

window.onscroll = function () {
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight + 16
  ) {
    offset++;
    fetchData();
  }
};

const buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener("click", handleData);
buttons[1].addEventListener("click", handleUser);

function handleData() {
  offset = 0;
  if (init) {
    document.querySelector(".container").innerHTML = "";
    fetchData();
    init = false;
  }
}

function handleUser() {
  init = true;
  document.querySelector(".container").innerHTML = "";
  formUser();
}

function initApp() {
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
