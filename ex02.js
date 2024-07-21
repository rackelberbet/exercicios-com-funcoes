//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.


let num = 5;

function fatorial(numero){
    let fatoracao = 1;
    
    while(numero > 0){
        fatoracao *= numero;
        console.log(numero); 
        numero--;
        }
        return fatoracao;
    }

console.log(fatorial(num));