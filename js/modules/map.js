export function map() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const tableElement = document.createElement("table");
  for (let c = 0; c < 10; c++) {
    const row = document.createElement("tr");
    tableElement.appendChild(row);
    for (let t = 0; t < 10; t++) {
      const cases = document.createElement("td");
      cases.setAttribute("index", `${c}${t}`);
      cases.className = "cases";
      cases.textContent = "🌳";
      if (cases.getAttribute("index") == "00") {
        cases.textContent = "🦇";
        cases.setAttribute("class", "perso");
      }
      row.appendChild(cases);
    }
  }
  container.appendChild(tableElement);

  const personnage = document.querySelector(".perso");
  document.addEventListener("keydown", handleKeydown);

  function handleKeydown(e) {
    let cases = document.querySelectorAll(".cases");

    if (e.code === "ArrowRight") {
      
      
    }
  }
}
