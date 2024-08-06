// Requires Application Modules
const logoQuestions = require("./lib/inquirer.js");
const shapes = require("./lib/logo.js");
const writeToFile = require("./lib/output.js");

// Initializes SVG Logo generation
async function init() {
  // Requests User Input to Logo Parameters
  const userInput = await logoQuestions();
  // console.log("index.js Line 10: ", userInput);

  // Generates SVG Logo Code (Specifications) based upon User Responses to Logo Parameters
  const logoSpecs = shapes(userInput);
  // console.log("index.js Line 14: ", logoSpecs);

  // Writes generated SVG Logo Code to SVG File
  const output = writeToFile(logoSpecs);
}

// Calls Initializing Function and Runs Application
init();
