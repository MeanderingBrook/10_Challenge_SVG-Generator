// Requires Node Packages
const fs = require("fs");
const inquirer = require("inquirer");

// Requires Application Modules
const shapes = require("./lib/shapes.js");

// Creates Array of User Questions to determine Logo Parameters (e.g., shape)
const logoParameters = [
  {
    type: "list",
    name: "logoShape",
    message: "Select the Shape of the Logo: ",
    choices: ["Circle", "Triangle", "Square"],
    default: "Circle",
    validate: (logoShape) => {
      if (!logoShape.length) {
        return "Please select the Shape of the Logo.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "logoColor",
    message:
      "Enter the Color of the Logo using a Color Keyword or Hexadecimal Number: ",
    default: "white",
    validate: (logoColor) => {
      if (!logoColor.length) {
        return "Please enter a Color Keyword or Hexadecimal Number for the Color of the Logo.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "logoChar",
    message: "Enter up to three (3) Characters to include in the Logo: ",
    default: "ABC",
    validate: (logoChar) => {
      if (!logoChar.length) {
        return "Please enter up to three (3) Characters to include in the Logo.";
      }
      if (logoChar.length >= 4) {
        return "Please enter no more than three (3) Characters to include in the Logo.";
      }
      return true;
    },
    filter: (logoChar) => {
      return logoChar.trim();
    },
  },
  {
    type: "input",
    name: "charColor",
    message:
      "Enter the Color of the Logo Characters using a Color Keyword or Hexadecimal Number: ",
    default: "black",
    validate: (charColor) => {
      if (!charColor.length) {
        return "Please enter a Color Keyword or Hexadecimal Number for the Color of the Logo Characters.";
      }
      return true;
    },
  },
];

// Creates Unique ID to be appended to SVG File Name (ensuring uniqueness of File Name)
function genFileName() {
  let id = Math.random().toString(16).slice(12);
  console.log(`index Line 83: ${id}`);

  fileName = `logo_${id}.svg`;
  console.log(`index Line 86: ${fileName}`);

  return fileName;
}

// Writes Logo Specifications to SVG File
function writeToFile(logoPath, logoSpecs) {
  fs.appendFile(logoPath, logoSpecs, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "index Line 87: Logo Specifications successfully written to file."
      );
    }
  });
}

// Initializes SVG Logo generation
async function init() {
  // Creates unique ID to append to SVG File Name
  fileName = genFileName();

  // Defines SVG Logo file Output Location and File Name
  logoPath = "./examples/" + fileName;
  console.log(`index Line 97: ${logoPath}`);

  // Requests User Input to Logo Parameters
  const userInput = await inquirer.prompt(logoParameters);
  console.log("index Line 104: ", userInput);

  // Generates SVG Logo Code (Specifications) based upon User Responses to Logo Parameters
  const logoSpecs = shapes(userInput);
  // console.log("index Line 108: ", logoSpecs);

  // Writes generated SVG Logo Code to SVG File
  writeToFile(logoPath, logoSpecs);
}

init();
