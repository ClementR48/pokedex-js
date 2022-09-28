export function initList(){
  const container = document.querySelector('.container')
  const listPokemon = document.createElement('ul')
  listPokemon.className = 'list-pokemons'
  container.appendChild(listPokemon)
}