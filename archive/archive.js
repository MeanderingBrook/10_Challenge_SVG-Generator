// All WORKS, just using extend now

// class Circle {
//   constructor(length, color, text) {
//     this.radius = length;
//     this.color = color;
//     this.text = text;
//   }

//   // outputColor() {
//   //   console.log(`shapes Line 7: The Color of this Circle is ${this.color}.`);
//   //   return `shapes Line 8: The Color of this Circle is ${this.color}.`;
//   // }

//   createCircle() {
//     return `
//     <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
//       <circle
//         cx="${this.radius}"
//         cy="${this.radius}"
//         r="${this.radius}"
//         stroke="transparent"
//         stroke-width="0"
//         fill="${this.color}"
//       />
//       ${this.text}
//     </svg>
//     `;
//   }
// }

// class Triangle {
//   constructor(length, color) {
//     this.color = color;
//   }

//   createTriangle() {
//     return `
// <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
//   <polygon points="100,10 150,190 50,190" style="fill:${this.color}" />
//   ${this.text}
// </svg>
//     `;
//   }
// }

// class Square {
//   constructor(length, color, text) {
//     this.length = length;
//     this.color = color;
//     this.text = text;
//   }

//   createSquare() {
//     return `
// <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <rect width="${this.length}" height="${this.length}" x="10" y="10" rx="0" ry="0" fill="${this.color}" />
//   ${this.text}
// </svg>
//     `;
//   }
// }

// // Creates new Logo Shape Objects from relevant Prototype and Generates Text-related Code for Logo Characters
// function shapes(parameters) {
//   // Defines Dimension of generated SVG Shapes
//   let length = 100;

//   if (parameters.logoShape === "Circle") {
//     // Generates HTML Line for Character Text
//     const text = new Text(
//       parameters.logoShape,
//       length,
//       parameters.logoChar,
//       parameters.charColor
//     );
//     logoText = text.insertText();

//     // Creates new Circle Object from Circle Prototype
//     const circle = new Circle(length, parameters.logoColor, logoText);

//     // shapes = circle.outputColor();

//     // Assigns Shape to be Exported to index.js and Written to File
//     return (shape = circle.renderCircle());
//   } else if (parameters.logoShape === "Square") {
//     // Generates HTML Line for Character Text
//     const text = new Text(
//       parameters.logoShape,
//       length,
//       parameters.logoChar,
//       parameters.charColor
//     );
//     logoText = text.insertText();

//     // Creates new Square Object from Square Prototype
//     const square = new Square(length, parameters.logoColor, logoText);

//     // Assigns Shape to be Exported to index.js and Written to File
//     return (shape = square.renderSquare());
//   } else if (parameters.logoShape === "Triangle") {
//     // Generates HTML Line for Character Text
//     const text = new Text(
//       parameters.logoShape,
//       length,
//       parameters.logoChar,
//       parameters.charColor
//     );
//     logoText = text.insertText();

//     // Creates new Triangle Object from Triangle Prototype
//     const triangle = new Triangle(length, parameters.logoColor, logoText);

//     // Assigns Shape to be Exported to index.js and Written to File
//     return (shape = triangle.renderTriangle());
//   }

//   // Test Output confirming Parameters values
//   // shapes = `Shapes Function: Logo Characters, ${parameters.logoChar}, Character Color, ${parameters.charColor}, Logo Shape, ${parameters.logoShape}, Logo Color, ${parameters.logoColor}`;

//   // Returns Logo Specifications through 'shape' Object to be written to file (index.js)
//   // return shape;
// }
