/**
 * @param {string} input
 */
function phoneMask(input) {
  return input.startsWith("8") ? "8 (999) 999-99-99" : "+7 (999) 999-99-99";
}

export { phoneMask };
