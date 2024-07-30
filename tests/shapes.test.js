// Jest Test Scripts to Evaluate Shape Rendering ('npm run test')
const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
  test("Render SVG of Green Circle Element", () => {
    const expectedSVG = `
    <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r="100"
        stroke="transparent"
        stroke-width="0"
        fill="green"
      />
      ABC
    </svg>
    `;
    const circle = new Circle(100, "green", "ABC");
    const actualSVG = circle.renderCircle();
    expect(actualSVG).toEqual(expectedSVG);
  });
});

describe("Triangle", () => {
  test("Render SVG of Blue Triangle Element", () => {
    const expectedSVG = `
    <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
      <polygon 
        points="100,0 0,200 200,200" 
        fill="blue" 
      />
      ABC
    </svg>
    `;
    const triangle = new Triangle(100, "blue", "ABC");
    const actualSVG = triangle.renderTriangle();
    expect(actualSVG).toEqual(expectedSVG);
  });
});

describe("Square", () => {
  test("Render SVG of Red Square Element", () => {
    const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect 
        width="200" 
        height="200" 
        x="10" 
        y="10" 
        rx="0" 
        ry="0" 
        fill="red" 
      />
      ABC
    </svg>
    `;
    const square = new Square(100, "red", "ABC");
    const actualSVG = square.renderSquare();
    expect(actualSVG).toEqual(expectedSVG);
  });
});
