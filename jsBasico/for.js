//LAÇOS DE REPETIÇÕES:
//FOR - Itera sobre a lsita com condições específicas

//EXEMPLO: 

for(let n =0; n < 5; n++){ //Declara a variável let n = 0 com o valor inicial 0 
    /*
    Explicação; enquato a variável n que inicialmente recebeu o valor de zero, for menor que 5, incremente a variável n a cada execução. O código para de executar quando a condição é cumprida.
    */
    console.log(n);
};

let cor = "branca";

switch(cor){
    case "branca":
        console.log("A cor é branca");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    default:
        console.log("Cor desconhecida");
}

let n1 = 5;
let n2 = 7;
let n3 = 3;
let n4 = 1;

let media = (n1 + n2 + n3 + n4) / 4;

switch (media) {
    case media <= 2:
        return "Sua nota foi péssima";
    case media <= 5:
        return "Sua nota foi mediana";
    case media <= 8:
        return "Sua nota foi ótima";
}