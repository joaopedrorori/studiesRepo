// string, number e boolean
// esses sao tipos basicos do js
// const frase: string = "string";
// const numero: number = 100;
// const cond: boolean = true;

// typeof
// Operador de js que retorna uma string indicando o tipo do dado.
// Os possiveis valores retornados por typeof sao :
//  =>string, number, boolean, function, object, undefined, bigint e symbol
// O typeof funciona como um typeguard

const frase = "Front End";
// console.log(typeof frase);

// if (typeof frase === "string") console.log("Frase eh string");
// else console.log("Frase nao eh string");

// console.log(typeof {}); //object
// console.log(typeof []); //object
// console.log(typeof null); //object

// String, Number e Boolean
// Nao confundior string, number e boolean com String Number e Boolean
// Os 3 ultimos sao funcoes construtoras desses tres primeiros tipos de dados.
// Eles sao responsaveis pela heranca das propriedades e metodos dos mesmos.

const frase1 = new String("Front End");
// : String => objeto do tipo objeto String
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
