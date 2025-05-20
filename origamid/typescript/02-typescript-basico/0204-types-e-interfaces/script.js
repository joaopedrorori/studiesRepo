"use strict";
// Types e Interface
// Object
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criacao de objetos ":{}"
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "Sim" : "Nao"}</p>
  </div>
  `;
}
let total = 100;
total = "200";
function pintarCategoria(categoria) {
    console.log(categoria);
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: false,
};
const notebook = {
    nome: "Notebook",
    preco: 2500,
    teclado: true,
};
function showProduct(data) {
    document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
  </div>
  `;
}
async function fetchProduct(url) {
    const response = await fetch(url);
    const data = await response.json();
    showProduct(data);
}
fetchProduct("https://api.origamid.dev/json/notebook.json");
