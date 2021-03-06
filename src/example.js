import { Triangle } from "./triangle.js";
import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import { Circle } from "./circle.js";
import { Rhombus } from "./rhombus.js";
import { Parallelogram } from "./parallelogram.js";
import { Polygon } from "./polygon.js";

const firstTriangle = new Triangle(5, 3, 4);
const firstRectangle = new Rectangle(5, 2);
const firstSquare = new Square(5);
const firstCircle = new Circle(7);
const firstRhombus = new Rhombus(5, 4);
const firstParallelogram = new Parallelogram(10, 12, 8);
const firstPolygon = new Polygon(3, 5);

const secondTriangle = new Triangle(5, 3, 4);

console.log(firstTriangle.triangle());
console.log(firstRectangle.rectangle());
console.log(firstSquare.square());
console.log(firstCircle.circle());
console.log(firstRhombus.rhombus());
console.log(firstParallelogram.parallelogram());
console.log(firstPolygon.polygon());

console.log(firstTriangle.isCongruent(secondTriangle));
console.log(secondTriangle.isIdentical(firstTriangle));
