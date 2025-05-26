"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Tuples
// Sao arrays que possuem dados em posicoes fixas
const produto1 = ["Notebook", 2500];
const produto2 = ["Notebook", 2500];
// console.log(produto2[0]?.toLowerCase());
const [nome, preco] = produto2;
// console.log(nome, preco);
// as const
// Torna um dado readonly e infere o tipo de dado mais especifico possivel.
// Em metodos que retornam Array's, as mesmas sao transformadas em tuples
//sem as const:
// function getText(selector: string): null | [HTMLElement, string] {
//   const el = document.querySelector<HTMLElement>(selector);
//   if (el) return [el, el.innerText];
//   else return null;
// }
// com as const:
function getText(selector) {
    const el = document.querySelector(selector);
    if (el)
        return [el, el.innerText];
    else
        return null;
}
const button = getText("button");
if (button) {
    button[0].classList;
    // button[1] = "teste"//Cannot assign to '1' because it is a read-only property.
}
const showPrice = (arr) => {
    const sum = arr === null || arr === void 0 ? void 0 : arr.reduce((acc, curr) => acc + curr[1], 0);
    if (sum)
        document.body.innerHTML += `Total: R$${sum}`;
};
function fetchVendas() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/vendas.json");
        const data = yield response.json();
        if (data)
            showPrice(data);
        return data;
    });
}
fetchVendas();
