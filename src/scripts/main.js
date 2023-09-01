import "../styles/main.css";

import Alpine from "alpinejs";
import mask from "@alpinejs/mask";

import { phoneMask } from "./Components/Mask.js";
import { setupCounter } from "./Components/Counter.js";

window.Alpine = Alpine;
window.phoneMask = phoneMask;

Alpine.plugin(mask);
Alpine.start();

window.addEventListener("load", function() {
  setupCounter(document.querySelector("#counter"));
});
