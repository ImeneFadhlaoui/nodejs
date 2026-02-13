const { tab, element } = require("./data.js");
const searchElement = require("./searchElement.js");

searchElement(tab, element, (err, index) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      `Element ${element} est à la position ${index} dans le tableau.`,
    );
  }
});
