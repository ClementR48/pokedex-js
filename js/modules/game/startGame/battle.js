import { Pokemon } from "../../pokedex/pokemon.js";

const container = document.querySelector(".container");
const myPokemon = JSON.parse(localStorage.getItem("pokemon"));

const hpMyPokemonElement = document.createElement("span");
const hpAdvElement = document.createElement("span");
let adv = {};
let starter = {};

export function battle() {
  let randomPokemon = Math.floor(Math.random() * 100 + 1);

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
    .then((res) => res.json())
    .then((poke) => {
      adv = poke;
      setArena(poke);
      whoStarts(poke);
    });
}

function setArena(poke) {
  const divElement = document.createElement("div");
  divElement.className = "arena";
  const divContainerPokemon = document.createElement("div");
  divContainerPokemon.className = "firstDivPokemon";
  const divContainerPokemon2 = document.createElement("div");
  divContainerPokemon2.className = "firstDivPokemon2";
  const imgElement = document.createElement("img");
  imgElement.setAttribute(
    "src",
    JSON.parse(localStorage.getItem("pokemon")).sprites.back_default
  );

  hpMyPokemonElement.textContent = JSON.parse(
    localStorage.getItem("pokemon")
  ).stats[0].base_stat;

  hpAdvElement.textContent = adv.stats[0].base_stat;

  const imgElement2 = document.createElement("img");
  imgElement2.setAttribute("src", poke.sprites.front_default);

  divContainerPokemon.appendChild(imgElement);
  divContainerPokemon.appendChild(hpMyPokemonElement);
  divContainerPokemon2.appendChild(imgElement2);
  divContainerPokemon2.appendChild(hpAdvElement);
  setTimeout(() => {
    divContainerPokemon2.style.transform = "scale(1)";
  }, 1000);

  textDialogue.textContent = "Ca va se taper fort mon pote";
  textDialogue.className = "dialogue";

  divElement.appendChild(divContainerPokemon);
  divElement.appendChild(textDialogue);
  divElement.appendChild(divContainerPokemon2);
  container.appendChild(divElement);
}

function whoStarts(poke) {
  myPokemon.stats[5].base_stat > poke.stats[5].base_stat
    ? (starter = { name: "mine", data: myPokemon })
    : (starter = { name: "adv", data: poke });
  setTimeout(() => {
    textDialogue.textContent = `${starter.data.name} commence !`;
    startBattle(starter);
  }, 2000);
}

function startBattle(starter) {
  const divElement = document.querySelector(".arena");
  if (starter.name === "mine") {
    const ulAttack = document.createElement("ul");
    const titleUl = document.createElement("h2");
    titleUl.textContent = "Liste attaques";
    ulAttack.appendChild(titleUl);
    ulAttack.className = "ulAttack";
    const li = document.createElement("li");
    li.textContent = "attack";
    li.className = "attacks";
    li.addEventListener("click", handleAttack);
    ulAttack.appendChild(li);
    divElement.appendChild(ulAttack);
  } else {
    setTimeout(() => {
      textDialogue.textContent = `${starter.data.name} vous attaque et vous `;
      attack();
    }, 2000);
  }
}

function handleAttack(e) {
  let hpAdv = adv.stats[0].base_stat;
  const divElement = document.querySelector(".arena");

  const attackPoint = myPokemon.stats[1].base_stat;
  const defenseAdv = adv.stats[2].base_stat;

  let degats;
  if (defenseAdv > attackPoint) {
    degats = hpAdv;
  } else {
    degats = attackPoint - defenseAdv;
  }

  hpAdv = hpAdv - degats;

  if (hpAdv <= 0) {
    hpAdvElement.textContent = 0;
    divElement.innerHTML = "";
    textDialogue.textContent = `Vous avez tué ${adv.name}`;
  } else {
    textDialogue.textContent = `${adv.name} a subi ${degats} de dégats`;
    hpAdvElement.textContent = hpAdv;
    setTimeout(() => {
      attack();
    }, 5000);
  }
}

function attack() {
  const divElement = document.querySelector(".arena");
  let hpAdv = adv.stats[0].base_stat;
  let hpMyPokemon = myPokemon.stats[0].base_stat;
  const attackPoint = adv.stats[1].base_stat;
  const defenseMyPokemon = myPokemon.stats[2].base_stat;

  let degats;
  if (defenseMyPokemon > attackPoint) {
    degats = hpMyPokemon;
  } else {
    degats = attackPoint - defenseMyPokemon;
  }

  hpMyPokemon = hpMyPokemon - degats;

  if (hpAdv <= 0) {
    hpMyPokemonElement.textContent = 0;
    divElement.innerHTML = "";
    textDialogue.textContent = ` ${adv.name} vous a battu`;
  } else {
    textDialogue.textContent = `${myPokemon.name} a subi ${degats} de dégats`;
    hpMyPokemonElement.textContent = hpMyPokemon;
  }
}

export class Battle {
  arenaContainer = document.createElement("div");
  adversaire;

  constructor(myPokemon) {
    this.myPokemon = new Pokemon(myPokemon);
  }

  log() {
    console.log(this.myPokemon);
    console.log(this.advPokemon);
  }

  async init() {
    await this.witchAdv();
  }
  async witchAdv() {
    let randomPokemon = Math.floor(Math.random() * 100 + 1);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`
      );
      const pokemon = await res.json();
      console.log(`[INFO] l'adversaire est ${pokemon.name}`);
      this.adversaire = new Pokemon(pokemon);
      this.createArena();
      return this.adversaire;
    } catch (error) {
      console.error(error);
    }
  }

  createArena() {
    console.log("[INFO] creation de l'arene");

    this.arenaContainer.className = "arena";

    this.createContainerMyPokemon();
    this.createContainerAdvPokemon();
    this.createDialogue();

    container.appendChild(this.arenaContainer);
  }

  createContainerMyPokemon() {
    const myPokemonContainer = document.createElement("div");
    myPokemonContainer.className = "firstDivPokemon";

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", this.myPokemon.getImages().back_default);

    const hpElement = document.createElement("span");
    hpElement.textContent = this.myPokemon.getHp();

    myPokemonContainer.appendChild(imgElement);
    myPokemonContainer.appendChild(hpElement);

    this.arenaContainer.appendChild(myPokemonContainer);
  }

  createContainerAdvPokemon() {
    const advPokemonContainer = document.createElement("div");
    advPokemonContainer.className = "firstDivPokemon2";

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", this.adversaire.getImages().front_default);

    const hpElement = document.createElement("span");
    hpElement.textContent = this.adversaire.getHp();

    advPokemonContainer.appendChild(imgElement);
    advPokemonContainer.appendChild(hpElement);

    setTimeout(() => {
      advPokemonContainer.style.transform = "scale(1)";
      this.whoStart();
    }, 1000);

    this.arenaContainer.appendChild(advPokemonContainer);
  }

  createDialogue() {
    const textDialogue = document.createElement("p");
    textDialogue.textContent = "Ca va se taper fort mon pote";
    textDialogue.className = "dialogue";
    this.arenaContainer.appendChild(textDialogue);
  }

  modifierDialogue(text){
    const dialogue = document.querySelector('.dialogue')
    dialogue.textContent = text
  }

  whoStart() {
    if (this.myPokemon.getSpeed() > this.adversaire.getSpeed()) {
      this.modifierDialogue(this.myPokemon.getName() + " commence a attaquer")

    } else {
      this.modifierDialogue(this.adversaire.getName() + " commence a attaquer")

    }
  }
}
