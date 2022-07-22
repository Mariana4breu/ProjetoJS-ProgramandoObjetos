console.log(`Trabalhando com Condicionais`);

//Para facilitar e agiliar o processo, existe uma estrutura de dados chamada "Array", em que podemos armazenar diversos dados. A maneira de declarar um array é um pouco diferente de textos e números: utilizamos uma palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista com nossos destinos:
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//    console.log("Comprador maior de idadade");
//    listaDeDestinos.splice(1, 1); // removendo item
//}   else if (estaAcompanhada == true) {
//    console.log("Comprador está acompanhado");
//    listaDeDestinos.splice(1, 1); //removedo item
//}else {
//    console.log("Não é maior de idade e não posso vender");
//}

//Para escrevermos algo como "ou" utilizamos || no JavaScrip:
if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n"); //O \n é um caractere especial que possibilita que pulemos uma linha no momento de imprimir a mensagem de texto.

//Para escrevermos algo como "e" utilizamos && no JavaScrip:
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
