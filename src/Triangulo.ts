import { Figura2D, calcularD } from "./Figura2D";

export class Triangulo{

   public areaTriangulo(p1: Figura2D, p2: Figura2D, p3: Figura2D){
        const ladoA = calcularD(p1, p2);
        const ladoB = calcularD(p2, p3);
        const ladoC = calcularD(p3, p1);

        const area = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
        
        
        if(ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB){
          if(area > 0){
            return "Os pontos formam um triângulo.\n";
          } else {
            return "Os pontos não formam um triângulo.";
          }
        }else{
          return "Os pontos não formam um triângulo.";
        }
  }
}
