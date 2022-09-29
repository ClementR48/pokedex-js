export function drawPokemon(pokemon) {
  const template = document.getElementById("pokemon_info");

  const listPokemon = document.querySelector(".list-pokemons");

  const clone = document.importNode(template.content, true);

  const cardPokemon = clone.querySelector(".card-pokemon");
  cardPokemon.setAttribute('data-set', pokemon.id)

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

  const nameDetails = clone.querySelector(".name-details");
  nameDetails.textContent = pokemon.name;

  let types = [];
  pokemon.types.forEach((type) => {
    types.push(type.type.name);
  });

  if (types[0] === "grass") {
    cardPokemon.style.border = "5px solid green";
  } else if (types[0] === "fire") {
    cardPokemon.style.border = "5px solid orange";
  } else if (types[0] === "water") {
    cardPokemon.style.border = "5px solid blue";
  } else if (types[0] === "bug") {
    cardPokemon.style.border = "5px solid rgb(19, 59, 30)";
  } else if (types[0] === "poison") {
    cardPokemon.style.border = "5px solid purple";
  } else if (types[0] === "electric") {
    cardPokemon.style.border = "5px solid yellow";
  } else if (types[0] === "normal") {
    cardPokemon.style.border = "5px solid grey";
  } else if (types[0] === "ground") {
    cardPokemon.style.border = "5px solid brown";
  } else if (types[0] === "fairy") {
    cardPokemon.style.border = "5px solid pink";
  } else if (types[0] === "psychic") {
    cardPokemon.style.border = "5px solid rgb(86, 107, 15)";
  } else {
    cardPokemon.style.border = "5px solid black";
  }

  for (let p = 0; p < pokemon.stats.length; p++) {
    details[
      p
    ].textContent = `${pokemon.stats[p].stat.name}: ${pokemon.stats[p].base_stat}`;
  }

  listPokemon.appendChild(clone);
}
