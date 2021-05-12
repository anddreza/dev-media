var usuario = {
    id: 2,
    nome = "Jose da Silva",
    idade: 28
};

var atendeAClassificacao = usuario.idade >= 18

if (atendeAClassificacao === true){
    console.log("Acesso permitido ao conteúdo");
} else {
    console.log("O usuário não pode acessar ao conteúdo")
}
