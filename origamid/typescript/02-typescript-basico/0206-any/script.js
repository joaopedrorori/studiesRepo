"use strict";
// Any
// Any indica que o dado pode conter qualquer tipo de dado do TypeScript.
// Devemos evitar ao maximo o uso do any, pois o mesmo remove todas as segurancas e conveniencias que buscamos ao usar TS
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
// console.log(normalizar("  TEEssTesE AqqUUuI   "));
// console.log(normalizar(123));//nao deu nenhum erro no ts, sim no runtime
// Any implicito
// Fora do modo estrito, o TS permitira o uso de parametros sem especificarmos o tipo.
// Esses parametros terao o tipo implicito de any.
// function normalizar(texto) {
//   return texto.trim().toLowerCase();
// }
// Uso do Any
// Em alguns casos o any faz sentido, como no caso da funcao json() onde qualquer tipo de dado pode ser retornado, dependendo da API que usamos
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    // data: any
    console.log(data);
}
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const dados = "o any gera problemas";
mostrarCursos(dados); //nao da o erro aqui e sim no runtime
