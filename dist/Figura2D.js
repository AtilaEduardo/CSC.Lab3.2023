"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularD = void 0;
function calcularD(x1, x2) {
    const dx = x1.x - x2.x;
    const dy = x1.y - x2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.calcularD = calcularD;
//# sourceMappingURL=Figura2D.js.map