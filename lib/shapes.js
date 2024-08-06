// Text Object defines <text> Tag within which to insert Logo Characters
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
        x="${this.length * 0.7}" 
        y="${this.length * 1.15}" 
        font-family="Verdana" 
        font-size="45" 
        fill="${this.charColor}">
        ${this.char}
      </text>
      `;
    } else if (this.shape === "Triangle") {
      return `
      <text 
        x="55" 
        y="150" 
        font-family="Verdana" 
        font-size="35" 
        fill="${this.charColor}">
        ${this.char}
      </text>
      `;
    }
  }
}

// Parent Shape Object defines Parameters of various Shapes used to create Logo
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
    // console.log(`shapes.js Line 85: ${this.color}`);

    return `
    <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
      <polygon 
        points="100,0 0,200 200,200" 
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
        width="${this.length * 2}" 
        height="${this.length * 2}" 
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

// Exports Text and Shape Classes
module.exports = { Text, Circle, Triangle, Square };
