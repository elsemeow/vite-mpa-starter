import "../styles/main.css";

import $ from "jquery";
import Alpine from "alpinejs";
import mask from "@alpinejs/mask";

import { setupCounter } from "./Components/Counter.js";
import { phoneMask } from "./Components/Mask.js";

window.jQuery = window.$ = $;
window.Alpine = Alpine;

window.phoneMask = phoneMask;

Alpine.plugin(mask);
Alpine.start();

$(function () {
  setupCounter(document.querySelector("#counter"));
});
