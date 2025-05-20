// Union Types
// É comum termos funcoes que podem retornar ou receber tipos diferentes
// Para isso a barra vertical é usada string | boolean | number

let total: string | number = "string";
// console.log(total);
total = 200;
// console.log(total);

// Funcoes
// Funcoes podem receber parametros com diferentes tipos retornar diferentes tipos de dado

function isNumber(value: number | string) {
  if (typeof value === "number") return true;
  // else return "Not a Number";// nao recomendado
  else return false; // nao recomendado
}
// console.log(isNumber(200));
// console.log(isNumber("200"));

// DOM
// Funcoes que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript nao tem acesso previo ao DOM para saber se o elemento existe ou nao.

const button = document.querySelector("button");
// retorna :HTMLButtonElement | null
// Optional chaining

button?.click();
// Executa click() se o button for diferente de null/undefined

// Exercício
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value: string | number) {
  if (typeof value === "number" || typeof value === "string")
    return Number(value);
  else throw new Error("value deve ser um número ou uma string");
}
console.log(toNumber(1));
console.log(toNumber("100"));
console.log(toNumber(true));
