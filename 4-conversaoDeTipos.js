console.log("Conversão de Tipos");

console.log("ano" + 2022); // resuldado: ano2022
console.log("2" + "2"); // resultado: 22
console.log(parseInt("2") + parseInt("2")); // parseInt("") : converteu o texto para um valor numérico inteiro, este "int" ser refere a um número inteiro. RESULTADO: 4

console.log("10" / "2"); //No caso de divisões, o comportamento do leitor é outro. Veremos que o retorno para este caso é 5, mesmo que não tenhamos realizado uma conversão explícita para números inteiros, afinal uma divisão só faz sentido com elementos numéricos.
console.log("Mariana" / "2"); // resultado: Nan -> Not a number. Ou seja, não é uma operação possível pois não se trata de números.

//O JavaScript é uma linguagem fracamente tipada, então ele sempre tentará realizar conversões de maneira implícita a fim de executar corretamente as declarações, além disso, podemos forçar a conversão por meio do parseInt. inclusive podemos realizar operaões quenão resultam em inteiros, como:
console.log("7" / "2") // resultado: 3.5 -> um número com casa decimal ou os chamados "pontos flutuantes". Lembrado que se queremos escrever números com casa decimal, devemos sempre utilizar pontos (.) e não vírgulas. Se escrevemos o mesmo valor com vírgula, é lido um espaço no lugar da vírgula,