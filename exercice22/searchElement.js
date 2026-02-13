function searchElement(tab, element, callback) {
  const index = tab.indexOf(element);
  if (index !== -1) {
    callback(null, index);
  } else {
    callback("Element not found", null);
  }
}

module.exports = searchElement;
