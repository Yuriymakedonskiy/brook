const sharp = require("sharp");

sharp("pool_3.jpg")
  .toFormat("webp")
  .toFile("pool_3.webp")
  .then(() => console.log("Conversion successful!"))
  .catch(err => console.error("Error:", err));
