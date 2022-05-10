let cantidadDados: number = Number(prompt("Cuantos dados va a tirar"));

let probabilidadCaras: number = 1 / 6;
let numeroFinal: number = 1;
numeroFinal *= probabilidadCaras ** cantidadDados;

console.log("La probabilidad es " + numeroFinal);
