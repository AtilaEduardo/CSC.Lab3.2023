export interface Figura2D {
    
    x: number;
    y: number;
   
 }
 
 export function calcularD(x1: Figura2D, x2: Figura2D): number{
     
     const dx = x1.x - x2.x;
     const dy = x1.y - x2.y;
 
     return Math.sqrt(dx * dx + dy * dy);
 }