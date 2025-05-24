"use strict";
// as
// Com o type assertion eh possivel indicar ao ts qual o tipo de dado esperado com a palavra-chave as.
// So eh possivel indicar tipo que possuam uma relacao com o tipo original.
// Evitar o maximo o use de type assertion, pois a type safety eh perdida quando indicamos algo que nem sempre sera verdade.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const video = document.querySelector(".player");
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        return response.json();
    });
}
function handleProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        // console.log((produto as Produto).nome);
        // console.log(produto.nome);
    });
}
handleProduto();
//! non-null operator
// Indica que nao existe a possibilidade do dado ser null.
// Cuidado com o uso, pois pode levar a erros no runtime.
// Use apenas se tiver certeza
// Esse eh um operador de TS "!." e nao de js como o "?.".
// Durante a compilacao ele sera removido
const video0 = document.querySelector("video");
// video?.volume;//isso aqui eh js, verifica se eh true, se sim, da a propriedade volume
// video.volume//nao da erro aqui e sim no runtime, pq com a exclamacao eu to dizendo "isso aqui sempre vai existir, CONFIA"
// document.querySelector("a")!.href = "https://www.joaopedrorori.com"
// ts permitiu mas o runtime deu erro pq esse a nao existe
// Outras Sintaxes
const video1 = document.querySelector(".player");
const video2 = document.querySelector(".player");
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
video4.volume;
