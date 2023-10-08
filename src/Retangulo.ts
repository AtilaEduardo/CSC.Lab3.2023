import { Figura2D, calcularD } from "./Figura2D";

export class Retangulo{

   public areaRetangulo(p1: Figura2D, p2: Figura2D, p3: Figura2D, p4: Figura2D){
        const distancia = [calcularD(p1, p2),
                           calcularD(p2, p3),
                           calcularD(p3, p4), 
                           calcularD(p4, p1)];

        distancia.sort((a,b) => a - b);     

        if (distancia[0] === distancia[1] && distancia[2] === distancia[3]) {
          return "Os pontos formam um retângulo.";
        } else {
          return "Os pontos não formam um retângulo.";
        }
    }

}