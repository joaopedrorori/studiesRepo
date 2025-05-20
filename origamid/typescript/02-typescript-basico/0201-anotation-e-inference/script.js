"use strict";
// Annotation (anotação)
// Com o typescript se faz possivel a indicacao de qual sera o tipo de dado de uma variavel atraves de anotacoes
// let produto: string = "livro";
// let preco: number = 200;
// produto = 300; //Type 'number' is not assignable to type 'string'.
// preco = "300" //Type 'string' is not assignable to type 'number'.
// const carro: {
//   marca: string;
//   portas: number;
// } = {
//   marca: "Audi",
//   portas: 4,
// };
// carro.marca = 200 //Type 'number' is not assignable to type 'string'.
// carro.marcas = "toyota"//Property 'marcas' does not exist on type '{ marca: string; portas: number; }'
// Inference (Inferência)
// O ts consegue inferir o tipo de dado de expressoes em js
// Sempre que ele conseguir inferir, nao preciso fazer a anotacao do dado.
let produto = "livro";
let preco = 200;
const carro = {
    marca: "Audi",
    portas: 4,
};
// continua entregando os mesmos erros de antes porque o js consegue inferir o tipo dos dados
const barato = preco < 400 ? true : "Produto caro";
// const barato: true | "Produto caro"
// Funcoes
// As anotacoes sao necessarias quando lidamos com funcoes
function somar(a, b) {
    return a + b;
}
somar(4, 5);
// somar(4, "string");//Argument of type 'string' is not assignable to parameter of type 'number'.
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = `R$${produto.preco}`;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
// console.log(produtoNovo);
// Exercicios
// Conserte a função com TypeScript
// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// Conserte as funções com TypeScript
// const input = document.querySelector('input');
// const total = localStorage.getItem('total');
// input.value = total;
// calcularGanho(input.value);
// function calcularGanho(value) {
//   const p = document.querySelector('p');
//   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }
// function totalMudou() {
//   const value = Number(input.value);
//   localStorage.setItem('total', value);
//   calcularGanho(value);
// }
// input.addEventListener('keyup', totalMudou);
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p)
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem("total", `${value}`);
        calcularGanho(value);
    }
}
if (input)
    input.addEventListener("keyup", totalMudou);
