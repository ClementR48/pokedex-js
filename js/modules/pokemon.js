export function drawPokemon(pokemon) {
  
  const template = document.getElementById("pokemon_info");

  const listPokemon = document.querySelector(".list-pokemons");

  const clone = document.importNode(template.content, true);

  const cardPokemon = clone.querySelector('.card-pokemon')


  const namePokemon = clone.querySelector(".name-pokemon");
  namePokemon.textContent = pokemon.name;

  const imgPokemon = clone.querySelector(".img-pokemon");
  imgPokemon.setAttribute(
    "src",
    pokemon.sprites.front_default === null
      ? "../assets/pokemon.jpeg"
      : pokemon.sprites.front_default
  );
  imgPokemon.setAttribute("alt", "image_pokemon");


  const details = clone.querySelectorAll(".hidden span");

  const nameDetails = clone.querySelector('.name-details');
  nameDetails.textContent = pokemon.name

  let types = [];
  pokemon.types.forEach((type) => {
    types.push(type.type.name);
  });
  if(types[0].name === 'grass'){
    cardPokemon.style.border = '1px solid green'
  }



  details[0].textContent = `Hauteur: ${pokemon.height}`;
  details[1].textContent = `Poids: ${pokemon.weight}`;
  details[2].textContent = `Types: ${types}`;

  listPokemon.appendChild(clone);
}
