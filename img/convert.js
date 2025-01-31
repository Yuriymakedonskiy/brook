const sharp = require("sharp");

sharp("bruk.jpg")
  .toFormat("webp")
  .toFile("bruk.webp")
  .then(() => console.log("Conversion successful!"))
  .catch(err => console.error("Error:", err));
