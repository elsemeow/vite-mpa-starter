/**
 * @param {string} type
 */
function getElementByMaskType(type) {
  return $(`[data-imask="${type}"]`);
}

export { getElementByMaskType };
