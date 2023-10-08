import { Figura2D } from "./Figura2D";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";


    let retangulo: Retangulo;
    let triangulo: Triangulo;

        retangulo = new Retangulo();
        triangulo = new Triangulo();
    

        const pontoA: Figura2D = { x: 7, y: 3 };
        const pontoB: Figura2D = { x: 14, y: 2 };
        const pontoC: Figura2D = { x: 7, y: 0 };
        const pontoD: Figura2D = { x: 10, y: 0 };
    
        console.log(triangulo.areaTriangulo(pontoA, pontoB, pontoC));
        console.log(retangulo.areaRetangulo(pontoA, pontoB, pontoC, pontoD));

