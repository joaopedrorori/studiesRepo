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
let chave;
// let chave: "nome" | "preco";
chave = "nome";
chave = "preco";
// typeof
// ja vimos que essa palavra chave do JS, eh responsavel por retornar o tipo do dado.
// No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro
function coordenadas(x, y) {
    return { x, y };
}
let coord;
//coord deve ser uma funcao com a mesma interface de coordenadas
// (uma funcao que recebe x e y e retorna x e y), mas o bloco de codigo pode ser diferente
coord = (x, y) => {
    x = x - 10;
    y = y - 10;
    return { x, y };
};
// console.log(coordenadas(10, 20));
// console.log(coord(10, 20));
// querySelector
// Eh com o keyof que o querySelector consegue associar uma string com a interface que ele retorna
// interface Elementos {
// a: HTMLAllCollection;
// video: HTMLVideoElement;
// div: HTMLElement;
// body: HTMLBodyElement;
// audio: HTMLAudioElement;
// }
//
// function selecionar<Chave extends keyof Elementos>(
// seletor: Chave
// ): null | Elementos[Chave] {
// return document.querySelector(seletor);
// }
//
// selecionar("audio"); //so me permite as strings que estao em elementos
// selecionar("video")?.//me da sugestoes de metodos e propriedades de HTMLVideoElement
// checkInterface
// o keyof pode ser utilizado para criarmos funcoes genericas utilitarias
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = "https://api.origamid.dev/json";
        const response = yield fetch(base + url);
        return yield response.json();
    });
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj)
        return true;
    else
        return false;
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const jogo = yield fetchData("/jogo.json");
        if (checkInterface(jogo, "desenvolvedora"))
            console.log(jogo);
        const livro = yield fetchData("/livro.json");
        if (checkInterface(livro, "autor"))
            console.log(livro.autor);
    });
}
handleData();
