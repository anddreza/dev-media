//Aqui é somente para reunir dois tipos de ensinamentos: while e quais numeros de um array são pares ou impares 
let numero = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

contador = 0;

while (contador < numeros.length){
    if(numeros[contador] % 2 == 0){
        total_pares++;
    } else {
        total_impares++;
    }
    contador++;
}

console.log("O total de numeros ímpares é:" + total_impares);
console.log("O total de números pares é: " + total_pares);

//O total de números ímpares é: 3
//O total de numeros pares é: 5