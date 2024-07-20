/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
*/ 

let imc = 0;

function calculoIMC(peso, altura){
    let verificacaoMetro = ".";
    let alturaStr = altura.toString();
    

    if(alturaStr.includes(verificacaoMetro)){
        imc = peso / (altura * altura);
        return `Seu IMC é: ${imc.toFixed(2)}.`;
    } else {
        return "A altura deve ser fornecida em metros.";
    }

}

let peso = 45;
let altura = 1.6;
let executarFuncao = calculoIMC(peso, altura);
console.log(executarFuncao);

/*IMC	CLASSIFICAÇÃO	OBESIDADE (GRAU)
MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III*/

function classificacaoIMC(){
    if (imc < 18.5){
        return `IMC menor que 18.5:\n *Magreza \n *Obesidade grau 0.`;
    } else if (imc >= 18.5 && imc <=24.9){
        return `IMC entre  18.5 e 24.9:\n *Normal \n *Obesidade grau 0.`;
    }else if(imc >= 25.0 && imc <= 29.9){
        return `IMC entre  25 e 29.9:\n *Sobrepeso \n *Obesidade grau 1.`;
    } else if(imc >= 30 && imc <= 39.9){
        return `IMC entre  30 e 39.9:\n *Obesidade \n *Obesidade grau 2.`;
    } else if( imc >= 40) {
        return `IMC maior que 40:\n *Obesidade grave\n *Obesidade grau 3.`;
    }
}

console.log(classificacaoIMC(executarFuncao));