//INTERANDO ARRAYS, FUNÇÕES, CONDIÇÕES E LOOPS

//forEach() - Método que executa uma função pra cada item do array
//iterar: significa percorrer ou verificar individualmente cada item de uma array

//Exemplo:

let frutas = ["maçã", "banana", "abacate", "limão"];

function exibirFrutas(){
    frutas.forEach(function (item) {
        console.log(item);
    });
}
exibirFrutas();