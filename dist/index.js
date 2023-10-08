"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Retangulo_1 = require("./Retangulo");
const Triangulo_1 = require("./Triangulo");
let retangulo;
let triangulo;
retangulo = new Retangulo_1.Retangulo();
triangulo = new Triangulo_1.Triangulo();
const pontoA = { x: -3, y: -7 };
const pontoB = { x: 10, y: 0 };
const pontoC = { x: -10, y: 6 };
const pontoD = { x: 0, y: 0 };
console.log(retangulo.areaRetangulo(pontoA, pontoB, pontoC, pontoD));
console.log(triangulo.areaTriangulo(pontoA, pontoB, pontoC));
//# sourceMappingURL=index.js.map