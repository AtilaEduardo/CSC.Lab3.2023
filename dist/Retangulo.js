"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const Figura2D_1 = require("./Figura2D");
class Retangulo {
    areaRetangulo(p1, p2, p3, p4) {
        const distancia = [(0, Figura2D_1.calcularD)(p1, p2),
            (0, Figura2D_1.calcularD)(p2, p3),
            (0, Figura2D_1.calcularD)(p3, p4),
            (0, Figura2D_1.calcularD)(p4, p1)];
        distancia.sort((a, b) => a - b);
        if (distancia[0] === distancia[1] || distancia[2] === distancia[3]) {
            return console.log("Os pontos não formam um retangulo.");
        }
        else {
            return console.log("Os pontos formam um retangulo.");
        }
    }
}
exports.Retangulo = Retangulo;
//# sourceMappingURL=Retangulo.js.map