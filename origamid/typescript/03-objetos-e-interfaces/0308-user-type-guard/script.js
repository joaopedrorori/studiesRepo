"use strict";
// Array
// Uma array nao pode ser verificada com o typeof pois a mesma eh um object.
// Podemos verificar se o dado eh instanceof Array ou podemos usar a funcao Array.isArray().
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async function fetchCursos() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     // console.log("Instancia de array");
//   }
//   if (Array.isArray(data)) {
//     // console.log("Eh array");
//   }
// }
// Type Predicate
// TypeScript nao executa JavaScript
// Sabemos ja que TS nao executa o JS durante a chegagem dos tipos.
// Se isso ocorre, entao como a funcao is Array consegue ser usada como Type Guard?
// Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma funcao booleana recebeu para ser verdadeira
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        console.log(data);
    }
}
// handleData("str");
// handleData(123);
// Objetos
// O type predicate pode ser especialmente utilizado para criarmos Type Guards para objetos especificos e garantirmos a Type Safety do projeto
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const json = yield response.json();
        handleProduto(json);
    });
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    // if (isProduto(data)) console.log(data);
}
// Exercicio
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const json = yield response.json();
        handleCursos(json);
    });
}
fetchCursos();
function isCurso(curso) {
    if (curso &&
        typeof curso === "object" &&
        "nome" in curso &&
        "horas" in curso &&
        "tags" in curso) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => (document.body.innerHTML += `
    <div>
      <h1>Nome:${item.nome}</h1>
      <p>Horas:${item.horas}</p>
      <span>Tags :${item.tags}</span>
    </div>
    `));
    }
}
