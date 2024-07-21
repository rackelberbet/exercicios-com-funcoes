/*Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/

let valorDoDolar = 5;

function conversaoDeDolar(dolar){
    let real = valorDoDolar * dolar;
    return `O valor de ${dolar}$ é igual a ${real.toFixed(2)}R$.`;
}

let dolar = 4;
let execFuncao = conversaoDeDolar(dolar);
console.log(execFuncao);