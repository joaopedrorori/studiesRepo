"use strict";
// Arrays
// Uma array eh definida com o tipo de dado(s) que ela possui, seguida por []
const numeros = [10, 30, 40, 5, 3, 30];
// : number[]
const valores = [10, "Taxas", 40, "Produto", 3, 30];
// : (string | number)[]
function maiorQue10(data) {
    return data.filter((num) => num > 10);
}
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
// console.log(maiorQue10(numeros));
// console.log(filtrarValores(valores));
const dados = [
    ["senhor dos aneis", 80],
    ["a guerra dos tronos", 120],
];
// : (string | number)[][]
// Sintaxe Alternativa
// Existe uma sintaxe alternativa, onde usamos Array<type>
// Sendo type o tipo de dado dentro da array
const novosNumeros = [10, 30, 40, 5, 3, 30];
function maiorQue20(data) {
    return data.filter((num) => num > 20);
}
function mostraTela(data) {
    data.forEach((item) => {
        let color = null;
        if (item.nivel === "iniciante") {
            color = "blue";
        }
        else {
            color = "red";
        }
        document.body.innerHTML += `
    <h1 style="color:${color}">${item.nome}</h1>
    <p>${item.aulas} aulas em ${item.horas} horas de curso</p>
    <p>${item.gratuito ? "gratuito" : "pago"}</p>
    <span>${item.tags.join(", ")}</span>
    `;
    });
}
async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    mostraTela(data);
}
fetchApi("https://api.origamid.dev/json/cursos.json");
