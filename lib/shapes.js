class Text {
  constructor(char, charColor) {
    this.char = char;
    this.charColor = charColor;
  }

  insertText() {
    return `<text x="50" y="50" font-family="Verdana" font-size="35" fill="${this.charColor}">${this.char}</text>`;
  }
}

class Circle {
  constructor(radius, color, text) {
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  // outputColor() {
  //   console.log(`shapes Line 7: The Color of this Circle is ${this.color}.`);
  //   return `shapes Line 8: The Color of this Circle is ${this.color}.`;
  // }

  createCircle() {
    return `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="${this.radius}" cx="${this.radius}" cy="${this.radius}" fill="${this.color}" />
  ${this.text}
</svg>;
    `;
  }
}

class Triangle {
  constructor(length, color) {
    this.color = color;
  }

  createTriangle() {
    return `
<svg height="${this.length}" width="${this.length}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 150,190 50,190" style="fill:${this.color}" />
</svg>
    `;
  }
}

class Square {
  constructor(length, color, text) {
    this.length = length;
    this.color = color;
    this.text = text;
  }

  createSquare() {
    return `
<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="${this.length}" height="${this.length}" x="10" y="10" rx="0" ry="0" fill="${this.color}" />
  ${this.text}
</svg>
    `;
  }
}

// Creates new Logo Shape Objects from relevant Prototype and Generates Text-related Code for Logo Characters
function shapes(parameters) {
  if (parameters.logoShape === "Circle") {
    // Generates HTML Line for Character Text
    const text = new Text(parameters.logoChar, parameters.charColor);
    logoText = text.insertText();

    // Creates new Circle Object from Circle Prototype
    const circle = new Circle(100, parameters.logoColor, logoText);

    // shapes = circle.outputColor();

    // Returns Shape to be Exported to index.js and Written to File
    shape = circle.createCircle();
  } else if (parameters.logoShape === "Square") {
    // Generates HTML Line for Character Text
    const text = new Text(parameters.logoChar, parameters.charColor);
    logoText = text.insertText();

    // Creates new Square Object from Square Prototype
    const square = new Square(100, parameters.logoColor, logoText);

    // Returns Shape to be Exported to index.js and Written to File
    shape = square.createSquare();
  }

  // shapes = `Shapes Function: Logo Characters, ${parameters.logoChar}, Character Color, ${parameters.charColor}, Logo Shape, ${parameters.logoShape}, Logo Color, ${parameters.logoColor}`;
  return shape;
}

// Exports Shape Classes
module.exports = shapes;
