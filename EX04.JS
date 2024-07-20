/*Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura (base) que serão dadas como parâmetro.
 */

let base = Number(prompt("Qual a base do retagulo em metros?"));
let altura = Number(prompt("Qual a altura do retagulo em metros?"));

function areaRetangulo(base, altura){
    let area = base * altura;
    return `A área do retangulo é ${area}m².`
}

function perimetroRetangulo(base, altura){
    let perimetro = 2 * (base + altura);
    return `O perímetro do retângulo é ${perimetro}m.`
}

console.log(areaRetangulo(base, altura), perimetroRetangulo(base, altura));