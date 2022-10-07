export const localStorageFunc = () => {
  if (localStorage.getItem("pokemon")) {
    localPokemon()
  }
  if (localStorage.getItem("nameUser") && localStorage.getItem("imgUser")) {
    localNameUser()
    localImageUser()
  } else {
/*     const headerName = document.querySelector(".name_user");
    headerName.textContent = "";
    const imgUser = document.querySelector(".img-user");
    imgUser.setAttribute("src", "../assets/toto.jpg"); */
  }
};

const localPokemon = () => {
  const imgPokemonHeader = document.querySelector(".img_pokemon_header");
  imgPokemonHeader.setAttribute(
    "src",
    JSON.parse(localStorage.getItem('pokemon')).sprites.front_default
  );
}

const localNameUser = () => {
  const headerName = document.querySelector(".name_user");
  headerName.textContent = localStorage.getItem("nameUser");
}

const localImageUser = () => {
  const imgUser = document.querySelector(".img-user");
  imgUser.setAttribute("src", localStorage.getItem("imgUser"));
}


