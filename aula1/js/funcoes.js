//camelCase - Escrevemos uma declaração sem espços, começando com minusculo e alternando entre maiusculo e minusculo.
//ex: saudarUsuarioLogado

function saudarUsuario(nome){
    console.log('Olá, ' + nome);
};

saudarUsuario("Arthur");

function somar(n1,n2){
    return n1 + n2 
}
console.log('A soma dos dois números é ' + somar(5,10));

function subtrair(n1,n2){
    return n1 - n2
}
console.log('A subtração dos dois números é ' + subtrair(20,10));

function multiplicar(n1,n2){
    return n1 * n2
}
console.log('A multiplicação dos dois números é ' + multiplicar(3,5));

function dividir(n1,n2){
    return n1/n2
}
console.log('A soma dos dois números é ' + dividir(40,5));

// Ctrl shift L: corrigi todas as palavras identicas do codigo

function corDoSemaforo(cor){
    if(cor === "verde"){
        return "Siga em frente";
    }else if(cor === "amarelo"){
        return "Atenção";
    }else if(cor === "vermelho"){
        return "pare";
    }else{
        return "cor inválida";
    };
}

console.log("Cor do semáforo",corDoSemaforo("verde"));


//array - lista

let frutas = ['maça', 'banana', 'uva', 'morango']

//Adicionando um item na lista. Usamos push();
frutas.push("laranja");

//Adicionando um item na lista ao inicio. Usamos unshifit();
frutas.unshift("pera");
console.log(frutas);

//Removendo um item na lista. Usamos pop();
frutas.pop();
console.log(frutas);

//Descobrindo qual a posição de um item no índice. Usamos indexOf();
let indice = frutas.indexOf("banana");
console.log(frutas);

//Contando os itens da lista = length;
let numeroDeFrutas = frutas.length;
console.log(numeroDeFrutas);

//Verificando se a lista está vazia;
if(frutas.length === 0){
    console.log("A lista está vazia");
}
else{
    console.log("A lista está cheia")
}

// verificar se um item contém um determinado elemento = includes;
frutas.includes();

if(!frutas.includes("uva")){
    console.log("Não tem uva na lista");
}else{
    console.log("Tem uva na lista");
}

function verificarAcesso(id){
    const idsAutorizados = [100,101,102,103,104,105];
    if(idsAutorizados.includes(id)){
        console.log("Acesso autorizado");
    }else{
        console.log("acesso negado!");
    }
}

verificarAcesso(102);