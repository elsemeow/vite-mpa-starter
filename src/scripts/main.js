import "/styles/main.css";

import $ from "jquery";
import IMask from "imask";

import { setupCounter } from "./Components/Counter.js";
import { getElementByMaskType } from "./Components/Mask.js";

window.jQuery = window.$ = $;
window.IMask = IMask;

$(function () {
  setupCounter(document.querySelector("#counter"));

  getElementByMaskType("phone").each(function (index, value) {
    IMask(value, { mask: "+{7} (000) 000-00-00" });
  });
});
