// como declarar um array
let array = ['string', 1, true];
console.log(array);

//pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);
//acessar um índice do array
console.log(array[0]);

//forEach percorre array
array2.forEach(function(item, index){console.log(item, '=', index)});

//push adiciona item
array2.push('novo item');
console.log(array2);

//pop remove item no final do array
array2.pop();
console.log(array2);

//shift remove item no inicio do array
array2.shift();
console.log(array2);

//unshift add item no inicio do array
array2.unshift('novo item no início');
console.log(array2);

//indexof imprime o indice do valor passado no parametro
console.log(array2.indexOf(true));
console.log(array2.indexOf('novo item no início'));

//splice remove ou substitui um item pelo índice;
array2.splice(0, 3);
console.log(array2);

//slice retorna uma parte de um array existente
var novoArray = array2.slice(2,4);
console.log(novoArray);

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno: {
        objectInterno: 'objeto interno'
    }
}

console.log(object);
console.log(object.number);
console.log(object.objectInterno);

//desestruturação de object
var stringAux = object.string;
console.log(stringAux);

var arrayInterno = object.array;
console.log(arrayInterno);

//outra maneira de desetruturação passando os atributos entre chaves
var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);