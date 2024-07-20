/*Crie uma função que mostre na tela a área e a circunferencia de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. */


let raio = 2;

function circunferencia(raio){
    let perimetro = 2 * Math.PI.toFixed(2) * raio;
    return `O perímetro é ${perimetro}m.`;
}

function areaCirculo(raio){
    let area = 2 * raio;
    return `A área é ${area}m²`;
}

console.log(circunferencia(raio), areaCirculo(raio));