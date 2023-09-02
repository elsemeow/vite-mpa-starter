/**
 * @param {object} element
 */
export function setupCounter(element) {
  if (!element) return;
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
