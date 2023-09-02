/**
 * @param {string} input
 */
export function phoneMask(input) {
  return input.startsWith("8") ? "8 (999) 999-99-99" : "+7 (999) 999-99-99";
}
