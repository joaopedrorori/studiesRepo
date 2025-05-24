"use strict";
// Generics
// Um tipo de generico eh uma forma de declararmos um parametro para a nossa funcao, classe ou interface
// Esse tipo podera ser indicado no momento do uso da funcao atrave de <Tipo>.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function retorno(a) {
    return a;
}
// entao ele meio que vai fazer isso:
// console.log(retorno<string>("A Game")); //a notacao <string> aqui nem sempre eh necessaria, nesse caso ela nao eh, foi usada somente para exemplo
// function retorno<string>(a: string): string {
//   return a;
// }
// console.log(retorno(200));
// function retorno<number>(a: number): number {
//   return a;
// }
// console.log(retorno(true));
// function retorno<boolean>(a: boolean): boolean {
//   return a;
// }
//dessa forma o typescript ja vai saber o tipo do retorno e nos ajudar a usar metodos e propriedades
function firstFive(arr) {
    return arr.slice(0, 5);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão"];
// console.log(firstFive(numeros));
// console.log(firstFive(frutas).map((item) => console.log(typeof item)));
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
// console.log(notNull("Joao")?.toUpperCase());
// console.log(notNull(200)?.toFixed(2));
// console.log(notNull(null));
function tipoDado(a) {
    const result = {
        dado: a,
        tipo: typeof a,
    };
    console.log(result);
    return result;
}
// tipoDado("a");
// extends
// Eh possivel indicar que o tipo generico deve herdar de uma interface especifica com o extends.
function extractText(el) {
    return { texto: el.innerText, el };
}
const link = document.querySelector("a");
// if (link) console.log(extractText(link));
// if (link) console.log(extractText(link).el);
// if (link) console.log(extractText(link).texto.toUpperCase());
// criando uma funcao que seleciona os elementos igual jQuery
function $(selector) {
    return document.querySelector(selector);
}
const link2 = $("a");
// Metodos
// Metodos nativos sao definidos utilizando generics, assim podemos indicar durante a execucao qual sera o tipo esperado.
const link3 = document.querySelector(".link");
if (link3 instanceof HTMLVideoElement)
    link3 === null || link3 === void 0 ? void 0 : link3.volume;
console.log(link3 instanceof HTMLVideoElement);
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const r = yield fetch(url);
        return yield r.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData("https://api.origamid.dev/json/notebook.json");
        console.log(notebook);
    });
}
handleData();
