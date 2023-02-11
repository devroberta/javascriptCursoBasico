//boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//string
var nome = 'Roberta';
console.log(nome);
console.log(typeof(nome));

//variavél local
let variavel2 = 'Roberta';
console.log(variavel2);

//variável constante
const constante = 'CONSTANTE';
console.log(constante);

var escopoGlobal = 'Variável Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoInterno = 'Variável Local';
    console.log(escopoInterno);
}

//chama a função escopoLocal
escopoLocal();

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica, compara tb os tipos
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 4 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);