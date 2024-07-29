//Faça uma function que verifique se uma palavra é um palíndromo.

function verificaPalindromo(palavra){
    let separarPalavra = palavra.split("");
    let palavraSeparadaInvertida = separarPalavra.reverse();
    let palavraInvertida = palavraSeparadaInvertida.join("");

    if(palavra === palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo.`)
    }else{
        console.log(`A palavra ${palavra} não é um palíndromo.`)
    }
}

let palavra = 'osso';
verificaPalindromo(palavra);
