// module
// se usarmos o import/export em qualquer momento em um arquivo .ts, o TS ira tratar o mesmo como module.
// Consequentemente o seu escopo nao sera mais global.
import { URL_BASE, Produto } from "./global.js";
import pluginSlide from "./pluginSlide.js";

pluginSlide("div");
console.log(URL_BASE);

const livro: Produto = {
  nome: "str",
  preco: 0,
};
