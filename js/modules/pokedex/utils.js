export const createCardPokemon = (datas, clone) => {
  const cardPokemon = clone.querySelector(".card-pokemon");
  cardPokemon.setAttribute("data-set", datas.id);

  speciesPokemon(datas.species, cardPokemon);
  createNamePokemon(datas.name, clone);
  createImagesPokemon(datas.sprites, clone);
  createStatsPokemon(datas.stats, clone);
};

export const createNamePokemon = (name, clone) => {
  const namePokemon = clone.querySelector(".name-pokemon");
  namePokemon.textContent = name;

  const nameDetails = clone.querySelector(".name-details");
  nameDetails.textContent = name;
};

export const createImagesPokemon = (images, clone) => {
  const imgPokemon = clone.querySelector(".img-pokemon");
  imgPokemon.setAttribute(
    "src",
    images.front_default === null
      ? "../assets/pokemon.jpeg"
      : images.front_default
  );
  imgPokemon.setAttribute("alt", "image_pokemon");
};

export const createStatsPokemon = (stats, clone) => {
  const details = clone.querySelectorAll(".hidden span");
  for (let p = 0; p < stats.length; p++) {
    details[p].textContent = `${stats[p].stat.name}: ${stats[p].base_stat}`;
  }
};

export const speciesPokemon = (species, cardPokemon) => {
  fetch(species.url)
    .then((response) => response.json())
    .then(
      (data) => (cardPokemon.style.border = `5px solid ${data.color.name}`)
    );
};
