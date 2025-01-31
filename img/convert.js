const sharp = require("sharp");

sharp("live-lo-fi1.png")
  .toFormat("avif")
  .toFile("live-lo-fi1.avif")
  .then(() => console.log("Conversion successful!"))
  .catch(err => console.error("Error:", err));
