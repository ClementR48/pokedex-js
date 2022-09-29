const container = document.querySelector(".container");
const myPokemon = JSON.parse(localStorage.getItem("pokemon"))

export function battle() {
  
  container.innerHTML = "";

  let randomPokemon = Math.floor(Math.random() * 150);

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
    .then((res) => res.json())
    .then((poke) => {
      setImagesPokemons(poke)
      whoStarts(poke)
      
    });
}

function setImagesPokemons(poke){
  const divElement = document.createElement("div");
      const imgElement = document.createElement("img");
      imgElement.setAttribute(
        "src",
        JSON.parse(localStorage.getItem("pokemon")).sprites.back_default
      );
      const imgElement2 = document.createElement("img");
      imgElement2.setAttribute("src", poke.sprites.front_default);

      divElement.appendChild(imgElement);
      divElement.appendChild(imgElement2);
      container.appendChild(divElement);
}

function whoStarts(poke){
  let starter
  myPokemon.stats[5].base_stat > poke.stats[5].base_stat ? starter = myPokemon : starter = poke

  startBattle(starter)
}

function startBattle(starter){
  console.log(starter); 
}


