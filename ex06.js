/* Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. */

function tabuada(numero){
    
    for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
        let multiplicacao = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${multiplicacao}`);
    }
}

let numero = 5;
tabuada(numero);
