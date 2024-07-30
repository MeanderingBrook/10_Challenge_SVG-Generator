// Requires Node Packages
const inquirer = require("inquirer");
const { resolve } = require("path");

// Creates Array of User Questions to determine Logo Parameters (e.g., shape)
function logoQuestions() {
  return inquirer.prompt([
    {
      type: "list",
      name: "logoShape",
      message: "Select the Shape of the Logo: ",
      choices: ["Circle", "Triangle", "Square"],
      // Note: Default Value deprecated in favor of Validation Control
      // default: "Circle",
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
      // Note: Default Value deprecated in favor of Validation Control
      // default: "white",
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
      // Note: Default Value deprecated in favor of Validation Control
      // default: "ABC",
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
      // Note: Default Value deprecated in favor of Validation Control
      // default: "black",
      validate: (charColor) => {
        if (!charColor.length) {
          return "Please enter a Color Keyword or Hexadecimal Number for the Color of the Logo Characters.";
        }
        return true;
      },
    },
  ]);
}

module.exports = logoQuestions;
