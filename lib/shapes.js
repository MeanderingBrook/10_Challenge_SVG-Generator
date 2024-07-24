class Text {
  constructor(shape, length, char, charColor) {
    this.shape = shape;
    this.length = length;
    this.char = char;
    this.charColor = charColor;
  }

  insertText() {
    if (this.shape === "Circle") {
      return `
      <text 
        x="${this.length * 0.55}" 
        y="${this.length * 1.1}" 
        font-family="Verdana" 
        font-size="45" 
        fill="${this.charColor}">
        ${this.char}
      </text>
      `;
    } else if (this.shape === "Square") {
      return `
      <text 
        x="${this.length * 0.25}" 
        y="${this.length * 0.75}" 
        font-family="Verdana" 
        font-size="45" 
        fill="${this.charColor}">
        ${this.char}
      </text>
      `;
    } else if (this.shape === "Triangle") {
      return `
      <text 
        x="75" 
        y="75" 
        font-family="Verdana" 
        font-size="45" 
        fill="${this.charColor}">
        ${this.char}
      </text>
      `;
    }
  }
}

class Shape {
  constructor(length, color, text) {
    this.length = length;
    this.color = color;
    this.text = text;
  }
}

class Circle extends Shape {
  constructor(length, color, text) {
    super(length, color, text);
  }

  renderCircle() {
    return `
    <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="${this.length}"
        cy="${this.length}"
        r="${this.length}"
        stroke="transparent"
        stroke-width="0"
        fill="${this.color}"
      />
      ${this.text}
    </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(length, color, text) {
    super(length, color, text);
  }

  renderTriangle() {
    console.log(`shapes Line 83: ${this.color}`);

    return `
    <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
      <polygon 
        points="100,10 50,110 150,110" 
        fill="${this.color}" 
      />
      ${this.text}
    </svg>
    `;
  }
}

class Square extends Shape {
  constructor(length, color, text) {
    super(length, color, text);
  }

  renderSquare() {
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect 
        width="${this.length}" 
        height="${this.length}" 
        x="10" 
        y="10" 
        rx="0" 
        ry="0" 
        fill="${this.color}" 
      />
      ${this.text}
    </svg>
    `;
  }
}

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
    shape = circle.renderCircle();
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
    shape = square.renderSquare();
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
    shape = triangle.renderTriangle();
  }

  // Test Output confirming Parameters values
  // shapes = `Shapes Function: Logo Characters, ${parameters.logoChar}, Character Color, ${parameters.charColor}, Logo Shape, ${parameters.logoShape}, Logo Color, ${parameters.logoColor}`;

  // Returns Logo Specifications through 'shape' Object to be written to file (index.js)
  return shape;
}

// Exports Shape Classes
module.exports = shapes;
