// Requires Node Packages
const fs = require("fs");

// Creates Unique ID to be appended to SVG File Name (ensuring uniqueness of File Name), and Path of Logo File
function genFileName() {
  // Generates random, unique ID to append to SVG output file name
  let id = Math.random().toString(16).slice(12);
  // console.log(`output.js Line 08: ${id}`);

  // Creates SVG output File Name incorporating random, unique ID
  fileName = `logo_${id}.svg`;
  // console.log(`output.js Line 12: ${fileName}`);

  // Creates Directory Path, including SVG output file name, to which to write Logo SVG specifications (as HTML)
  logoPath = "./examples/" + fileName;
  // console.log(`output.js Line 16: ${logoPath}`);

  // Returns File Name, and Directory Path to which Logo SVG (as HTML) will be written
  return logoPath;
}

// Writes Logo Specifications (as HTML) to SVG File Name and Directory Path specified in Function, getFileName
function writeToFile(logoSpecs) {
  genFileName();

  fs.appendFile(logoPath, logoSpecs, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "output.js Line 31: Logo Specifications successfully written to File at,",
        logoPath
      );
    }
  });
}

// Exports writeToFile Function
module.exports = writeToFile;
