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

  drawPokemon() {
    const listPokemon = document.querySelector(".list-pokemons");
    const template = document.getElementById("pokemon_info");
    const clone = document.importNode(template.content, true);

    createCardPokemon(this.datas, clone);

    listPokemon.appendChild(clone);
  }

  starterPokemon(){
   
  }
}
