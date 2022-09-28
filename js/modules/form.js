import { choosePokemon } from "./choosePokemon.js";
import { initList } from "./listPokemon.js";
import { map } from "./map.js";
import { drawPokemon } from "./pokemon.js";

export function formUser() {
  if (!localStorage.getItem("nameUser")) {
    document.querySelector(
      ".container"
    ).innerHTML = `<div class='container-form'><form action="" method="get" class="form">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="img">Enter your image: </label>
    <input type="text" name="img" id="img" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Valider!">
  </div>
</form>
</div>`;

    const form = document.querySelector("form");

    form.addEventListener("submit", handleSubmit);
    function handleSubmit(e) {
      e.preventDefault();
      const inputs = document.querySelectorAll("input");
      let nameValue = inputs[0].value;
      let imgValue = inputs[1].value;

      localStorage.setItem("nameUser", nameValue);
      localStorage.setItem("imgUser", imgValue);

      const headerName = document.querySelector(".name_user");
      headerName.textContent = localStorage.getItem("nameUser");
      const imgUser = document.querySelector(".img-user");
      imgUser.setAttribute("src", localStorage.getItem("imgUser"));
      document.querySelector(".container").innerHTML = "";
      choosePokemon();
    }
  } else {
    if (localStorage.getItem("pokemon")) {
      map()
    } else {
      choosePokemon();
    }
  }
}
