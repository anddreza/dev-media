var aluno_academia = {
    id: 10,
    nome: "Jose da Silva", 
    altura: 1.90,
    peso: 90
};

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);

if (imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + "está abaixo do peso");
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + "está com peso normal");
} else {
    console.log("O aluno " + nome_aluno + "está acima do peso")
}
