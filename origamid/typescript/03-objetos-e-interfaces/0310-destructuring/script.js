"use strict";
// Destructuring
// Durante a desestrututracao de objetos, podemos indicar o tipo de dado com a sintaxe:
// { key1, key2 }: { key1: type1; key2: type2; }
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco === null || preco === void 0 ? void 0 : preco.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 500,
});
// Conhecer os Dados
// Durante uma desestruturacao eh necessario indicar o tipo exato do dado esperado pelo TypeScript.
// Ex.: Um currentTarget pode ser EventTarget | null
// function handleClick({
//   currentTarget,
//   pageX,
// }: {
//   currentTarget: EventTarget | null;
//   pageX: number;
// }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse clicou em ${pageX}</h1>`;
//   }
// }
///
//ou
///
function handleClick({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse clicou em ${pageX}</h1>`;
    }
}
// document.documentElement.addEventListener("pointerdown", handleClick);
// document.documentElement.addEventListener("touchstart", handleClick);
// ...rest
// O operador ...rest retorna uma Array
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 20, 10, 30, 1));
console.log(comparar("maior", 3, 4, 5, 6, 7, 20, 10, 30, 1));
