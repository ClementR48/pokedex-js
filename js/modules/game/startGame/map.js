import { battle } from "./battle.js";

const container = document.querySelector(".container");

let x = 0;
let y = 0;
export function map() {
  

  const tableElement = document.createElement("table");
  for (let c = 0; c < 12; c++) {
    const row = document.createElement("tr");
    tableElement.appendChild(row);
    for (let t = 0; t < 10; t++) {
      const cases = document.createElement("td");
      cases.setAttribute("x", ` ${c}`);
      cases.setAttribute("y", ` ${t}`);
      cases.className = "cases";
      cases.textContent = "🌳";
      if (cases.getAttribute("x") == x && cases.getAttribute("y") == y) {
        cases.textContent = "🦇";
        cases.setAttribute("class", "perso");
      }
      row.appendChild(cases);
    }
  }
  container.appendChild(tableElement);

  document.addEventListener("keydown", handleKeydown);
}

function handleKeydown(e) {
  const personnage = document.querySelector(".perso");
  let cases = document.querySelectorAll(".cases");

  function moves(mov) {
    personnage.className = "cases";
    personnage.textContent = "🌳";
    mov;
    let randomBattle = Math.floor(Math.random() * 3);

    if (randomBattle === 1) {
      battle();
    }
    for (let index = 0; index < cases.length; index++) {
      if (
        cases[index].getAttribute("x") == x &&
        cases[index].getAttribute("y") == y
      ) {
        cases[index].textContent = "🦇";
        cases[index].setAttribute("class", "perso");
      }
    }
  }

  if (e.code === "ArrowRight" && y !== 9) {
    moves(y++);
  }
  if (e.code === "ArrowLeft" && y !== 0) {
    moves(y--);
  }

  if (e.code === "ArrowDown" && x != 9) {
    moves(x++);
  }
  if (e.code === "ArrowUp" && x != 0) {
    moves(x--);
  }
}
