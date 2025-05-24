"use strict";
// TypeGuard e ControlFlow
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Guard, Safety e Narrowing
// O Type Guard (defesa) garante a Type Safety (seguranca) do dado dentro do bloco condicional
// Esse processo eh chamado de Type Narrowing(estreitamento)
// O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional
function typeGuard(value) {
    if (typeof value === "string")
        return value.toLowerCase();
    if (typeof value === "number")
        return value.toFixed();
    if (value instanceof HTMLElement)
        return value.innerText;
}
// console.log(typeGuard("joao"));
// console.log(typeGuard(123));
// console.log(typeGuard(document.body));
// in
// O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada
// "'propriedade' in obj"
const obj = {
    nome: "Origamid",
};
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const json = yield response.json();
        handleProduto(json);
    });
}
function handleProduto(data) {
    console.log(data);
    if ("preco" in data) {
        document.body.innerHTML = `
      <p>Nome: ${data.nome}</p>
      <p>Preco: ${data.preco + 100}</p>
  `;
    }
}
fetchProduto();
