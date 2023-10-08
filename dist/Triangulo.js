"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const Figura2D_1 = require("./Figura2D");
class Triangulo {
    areaTriangulo(p1, p2, p3) {
        const ladoA = (0, Figura2D_1.calcularD)(p1, p2);
        const ladoB = (0, Figura2D_1.calcularD)(p2, p3);
        const ladoC = (0, Figura2D_1.calcularD)(p3, p1);
        if (ladoA + ladoB > ladoC || ladoB + ladoC > ladoA || ladoA + ladoC > ladoB) {
            return console.log("Os pontos formam um triângulo.");
        }
        else {
            return console.log("Os pontos não formam um triângulo.");
        }
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=Triangulo.js.map