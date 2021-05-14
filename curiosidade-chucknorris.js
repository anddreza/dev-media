var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho_colecao = curiosidade_chuck_norris.length;
//obtemos o total de objetos da coleção e armazenamos na variavel tamanho_colecao
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);
/*
Math.random() retorna um numero aleatorio entre 0 e <1 (1 não incluido)
Math.floor() arredonda um número para baixo para o número inteiro mais proximo
Math.random() vai retornar um número que seja maior ou igual a zero e também menor que 1.
Os numeros podem ser retornados: 
0.243235
0.34234
0.56778
Os resultados de Math.random() é multiplicado pelo tamanho da coleção. Ex: 0.234556 x 10 = 5.9393
Após a operação, usamos Math.floor() para arrendonar o número para o menor número inteiro mais próximo
Math.flor(3.4566) = 3

O resultado arredondado é armazenado na variavel numero_sorteado 

Dessa forma, temos um numero aleatorio que pode ser um valor entre 0 e 9.
*/
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];
/*
A variavel numero_sorteado é utilizada como indice da coleção, o que nos permite acessar um objeto dentro do array 

Com isso, armazenamos na variável curiosidade_escolhida um objeto da coleção que contem fatos curiosos sobre Chuck Norris.
*/
var titulo_curisidade = curiosidades_escolhida.titulo;

var conteudo_curiosidade = curiosidade_escolhida.conteudo; 
// Os dados sobre a curiosidade selecionada são armazenadas em variaveis 
console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Titulo " + titulo_curiosidade);
console.log("Conteudo: " + conteudo_curiosidade);
//No final são impressos fatos curiosos sobre Chuck Norris, exibindo um título e um conteúdo sobre a curiosidade