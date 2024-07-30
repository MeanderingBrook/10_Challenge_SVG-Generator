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
