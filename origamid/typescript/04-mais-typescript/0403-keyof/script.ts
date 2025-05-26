// keyof
// indica que o dado eh uma chave de uma Interface/Tipo
interface Produto {
  nome: string;
  preco: number;
}
let chave: keyof Produto;
// let chave: "nome" | "preco";

chave = "nome";
chave = "preco";

// typeof
// ja vimos que essa palavra chave do JS, eh responsavel por retornar o tipo do dado.
// No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro
function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;
//coord deve ser uma funcao com a mesma interface de coordenadas
// (uma funcao que recebe x e y e retorna x e y), mas o bloco de codigo pode ser diferente
coord = (x: number, y: number) => {
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
async function fetchData<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataforma: string[];
}
interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
  if (obj && typeof obj === "object" && key in obj) return true;
  else return false;
}

async function handleData() {
  const jogo = await fetchData("/jogo.json");
  if (checkInterface<Jogo>(jogo, "desenvolvedora")) console.log(jogo);
  const livro = await fetchData<Livro>("/livro.json");
  if (checkInterface<Livro>(livro, "autor")) console.log(livro.autor);
}
handleData();
