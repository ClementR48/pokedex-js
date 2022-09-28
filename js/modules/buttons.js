import { fetchData } from "./fetchPokemons.js";
import { formUser } from "./form.js";

let init = true;

export function btns(offset) {
  const buttons = document.querySelectorAll(".btn");

  buttons[0].addEventListener("click", handleData);
  buttons[1].addEventListener("click", handleUser);


  function handleData() {
    if (init) {
      document.querySelector(".container").innerHTML = "";
      fetchData(offset);
      init = false;
    }
  }

  function handleUser() {
    init = true;
    document.querySelector(".container").innerHTML = "";
    formUser();
  }
}
