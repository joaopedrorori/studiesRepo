"use strict";
// Functions
// A interface de uma funcao eh definida durante a sua declaracao
var _a, _b;
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(1, 2);
somar(1, 2, 3);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
// Void
// No js, uma funcao sem um return ira retornar undefined.
// No TypeScript o retorno eh definido como void
// Isso evita usos errados como checagens booleanas de metodos que nao possuem retorno
function pintarTela(cor) {
    document.body.style.background = cor;
}
// if (pintarTela("black")) console.log("Pintou tela"); //o void vai impedir esse tipo de checagem
// else console.log("nao pintou");
// console.log(pintarTela("black"));
pintarTela("black");
const btn = document.querySelector("button");
btn === null || btn === void 0 ? void 0 : btn.click();
// HTMLElement.click(): void
function isString(value) {
    if (typeof value === "string")
        return true;
}
// console.log(isString("teste"));
// console.log(isString(200));
// Never
// O never eh utilizado em casos onde a funcao gera um erro ou termina uma aplicacao
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    return forma.permitro(3);
}
function normalizar(valor) {
    if (typeof valor === "string")
        return valor.trim().toLowerCase();
    else
        return valor.map((item) => item.trim().toLowerCase());
}
function $(seletor) {
    return document.querySelector(seletor);
}
(_a = $("a")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => "teste");
(_b = $("video")) === null || _b === void 0 ? void 0 : _b.volume;
function upNumber(n) {
    if (typeof n === "string")
        return Math.ceil(Number(n)).toString();
    else
        return Number(Math.ceil(n));
}
console.log(upNumber("3.45"));
console.log(upNumber(3.45));
