// Requires Application Modules
const { Text, Circle, Triangle, Square } = require("./shapes");

// Creates new Logo Shape Objects from relevant Prototype and Generates Text-related Code for Logo Characters
function shapes(parameters) {
  // Defines Dimension of generated SVG Shapes
  let length = 100;

  if (parameters.logoShape === "Circle") {
    // Generates HTML Line for Character Text
    const text = new Text(
      parameters.logoShape,
      length,
      parameters.logoChar,
      parameters.charColor
    );
    logoText = text.insertText();

    // Creates new Circle Object from Circle Prototype
    const circle = new Circle(length, parameters.logoColor, logoText);

    // shapes = circle.outputColor();

    // Assigns Shape to be Exported to index.js and Written to File
    return (shape = circle.renderCircle());
  } else if (parameters.logoShape === "Square") {
    // Generates HTML Line for Character Text
    const text = new Text(
      parameters.logoShape,
      length,
      parameters.logoChar,
      parameters.charColor
    );
    logoText = text.insertText();

    // Creates new Square Object from Square Prototype
    const square = new Square(length, parameters.logoColor, logoText);

    // Assigns Shape to be Exported to index.js and Written to File
    return (shape = square.renderSquare());
  } else if (parameters.logoShape === "Triangle") {
    // Generates HTML Line for Character Text
    const text = new Text(
      parameters.logoShape,
      length,
      parameters.logoChar,
      parameters.charColor
    );
    logoText = text.insertText();

    // Creates new Triangle Object from Triangle Prototype
    const triangle = new Triangle(length, parameters.logoColor, logoText);

    // Assigns Shape to be Exported to index.js and Written to File
    return (shape = triangle.renderTriangle());
  }

  // Development Test Output confirming Parameters values
  // shapes = `Shapes Function: Logo Characters, ${parameters.logoChar}, Character Color, ${parameters.charColor}, Logo Shape, ${parameters.logoShape}, Logo Color, ${parameters.logoColor}`;
}

module.exports = shapes;
