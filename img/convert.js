const sharp = require("sharp");

sharp("IMG_6589.jpg")
  .toFormat("webp")
  .toFile("pool_6.webp")
  .then(() => console.log("Conversion successful!"))
  .catch(err => console.error("Error:", err));
