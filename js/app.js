import { btns } from "./modules/buttonsNav.js";
import { localStorageFunc } from "./modules/localStorage.js";
import { scroll } from "./modules/scroll.js";

let offset = 0;

function initApp() {
  btns(offset);
  localStorageFunc()
  scroll(offset)
}
initApp();


