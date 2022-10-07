import { createCardPokemon } from "./utils.js";

export class Pokemon {
  constructor(datas) {
    (this.id = datas.id),
      (this.name = datas.name),
      (this.datas = datas),
      (this.images = datas.sprites),
      (this.stats = datas.stats);
    this.species = datas.species;
    this.types = datas.types;
  }

  log() {
    console.log(this.datas);
  }

  getName() {
    return this.name;
  }

  getImages() {
    return this.images;
  }

  getHp() {
    return this.stats[0].base_stat;
  }

  getSpeed() {
    return this.stats[5].base_stat;
  }

  drawPokemon() {
    const listPokemon = document.querySelector(".list-pokemons");
    const template = document.getElementById("pokemon_info");
    const clone = document.importNode(template.content, true);

    createCardPokemon(this.datas, clone);
    listPokemon.appendChild(clone);
  }
}
