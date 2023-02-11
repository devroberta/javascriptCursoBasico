// TIPOS DE FUNÇÃO

// declarativas
function funcao() {
    console.log('Sou uma mensagem de uma função declarativa');
}

funcao();

// Expressão de Função
// com nomeação
var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão com nomeação!');
}

funcao();

// sem nomeação
var funcao = function() {
    console.log('Sou uma mensagem de função de expressão sem nomeação!');
}

funcao();

//arrow function
var funcao = () => {
    console.log('Sou uma arrow function!')
}

funcao();

