function SaudarCriador(nome){
    console.log('Olá tenha um ótimo dia, senhor ' + nome);
} 
SaudarCriador("Arthur");

function receita(nome){
    console.log('Verificando os ingredientes para a receita do ' + nome)
} receita("Mousse gourmet");

let ingredientesDaReceita = ['creme de leite', 'leite condensado', 'suco em pó']
ingredientesDaReceita.push('frutas');
console.log(ingredientesDaReceita);

function inclui(nome){
    console.log('Verificando se a lista inclui: '+ nome)
}inclui("leite condensado");

ingredientesDaReceita.includes();
if(ingredientesDaReceita.includes("leite condensado")){
    console.log("leite condensado está incluso na lista");
}else{
    console.log("leite condensado não está na lista")
}
