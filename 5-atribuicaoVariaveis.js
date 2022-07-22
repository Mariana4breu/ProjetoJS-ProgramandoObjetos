console.log("Trabalhando com Atribuição de Variáveis");

// O JavaScript permite que mudemos o tipo das variáveis livremente, mas essa não é uma boa prática, o correto é a atribuição seja mais constante, uma vez que a mudança de estados na programação é algo complexo que pode desencadiar em muitos erros.
//const idade = 25; // constant é um tipo de variável que não pode ser modificada uma vez que sua atribuição original foi feita.
const nome = "Mariana"; // o "let" pode variar, ou seja, mudar constantemente. 
const sobrenome = "Abreu";


//console.log(nome + sobrenome + idade); //resultado: MarianaAbreu25
//console.log(nome,sobrenome,idade); // resultado: Mariana Abreu 25
//console.log(nome + " " + sobrenome + " " + idade); // resultado: Mariana Abreu 25
console.log(`Meu nome é ${nome} ${sobrenome}`); // resultado: Meu nome é Mariana Abreu

/*
nome = nome + sobrenome; // resultado: MarianaAbreu (para esse resultado deve ser alterado a variavel "const nome" para a variavel "let nome")
console.log(nome);
*/

// A definição "let" existe e eventualmente precisaremos utilizá-la, mas podemos encontrar novos caminhos para manter nosso código mais condizente com as boas práticas. Como por exemplo criar uma nova variável que condense nome e sobrenome:
const nomeCompleto = nome + sobrenome; // resultado: MarianaAbreu
console.log(nomeCompleto);

let idade; // declarando variável
idade= 25; // atribuindo valor
idade = idade + 1; // resultado: 26
console.log(idade);