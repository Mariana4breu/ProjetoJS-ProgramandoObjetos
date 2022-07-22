console.log(`Trabalhando com listas`);
/*
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;


console.log("Destinos possíveis: ");
console.log(salvador, saoPaulo, rioDeJaneiro);
// resultado: 
Destinos possíveis:
Salvador São Paulo Rio de Janeiro 
*/

//Para facilitar e agiliar o processo, existe uma estrutura de dados chamada "Array", em que podemos armazenar diversos dados. A maneira de declarar um array é um pouco diferente de textos e números: utilizamos uma palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista com nossos destinos:
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // push: irá adicionar itens dentro de listaDeDestinos
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
/*resultado:
Destinos possíveis:
[ 'Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba' ] 
      0     ,    1       ,         2       ,      3        */

listaDeDestinos.splice(1,1); // splice: irá remover um elemento da listaDeDestinos, para isso também precisaremos declarar a posição inicial do item e a a quantidade de itens a serem deletados para que a remoção seja feita declarados entre parenteses respectivamente no exemplo "(1,1)"; 
console.log(listaDeDestinos); 
/* resultado:
[ 'Salvador', 'Rio de Janeiro', 'Curitiba' ]
*/
console.log(listaDeDestinos[1]); //resultado: Rio de Janeiro


