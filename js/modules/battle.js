const container = document.querySelector(".container");
const myPokemon = JSON.parse(localStorage.getItem("pokemon"));
const textDialogue = document.createElement("p");

export function battle() {
  container.innerHTML = "";

  let randomPokemon = Math.floor(Math.random() * 100 + 1);

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
    .then((res) => res.json())
    .then((poke) => {
      setArena(poke);
      whoStarts(poke);
    });
}

function setArena(poke) {
  const divElement = document.createElement("div");
  divElement.className = "arena";
  const divContainerPokemon = document.createElement("div");
  const divContainerPokemon2 = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute(
    "src",
    JSON.parse(localStorage.getItem("pokemon")).sprites.back_default
  );
  const span = document.createElement("span");
  span.textContent = JSON.parse(
    localStorage.getItem("pokemon")
  ).stats[0].base_stat;
  const span2 = document.createElement("span");
  span2.textContent = poke.stats[0].base_stat;

  const imgElement2 = document.createElement("img");
  imgElement2.setAttribute("src", poke.sprites.front_default);

  divContainerPokemon.appendChild(imgElement);
  divContainerPokemon.appendChild(span);
  divContainerPokemon2.appendChild(imgElement2);
  divContainerPokemon2.appendChild(span2);
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
  let starter = {};
  myPokemon.stats[5].base_stat > poke.stats[5].base_stat
    ? (starter = { name: "mine", data: myPokemon })
    : (starter = { name: "adv", data: poke });
  setTimeout(() => {
    textDialogue.textContent = `${starter.data.name} commence !`;
    startBattle(starter);
  }, 2000);
}

function startBattle(starter) {
  const divElement = document.createElement("div");
  console.log(starter);
  if (starter.name === "mine") {
    const ulAttack = document.createElement("ul");
    ulAttack.className = "ulAttack";
    const li = document.createElement("li");
    li.textContent = "attack";
    ulAttack.appendChild(li);
    divElement.appendChild(ulAttack);
  } else {
    setTimeout(() => {
      textDialogue.textContent = `${starter.data.name} vous attaque`;
      
    }, 2000);
  }
}
