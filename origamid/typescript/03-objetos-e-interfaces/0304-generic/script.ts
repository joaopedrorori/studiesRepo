// Generics
// Um tipo de generico eh uma forma de declararmos um parametro para a nossa funcao, classe ou interface
// Esse tipo podera ser indicado no momento do uso da funcao atrave de <Tipo>.

function retorno<variavel>(a: variavel): variavel {
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

function firstFive<T>(arr: T[]): T[] {
  return arr.slice(0, 5);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão"];

// console.log(firstFive(numeros));
// console.log(firstFive(frutas).map((item) => console.log(typeof item)));

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}

// console.log(notNull("Joao")?.toUpperCase());
// console.log(notNull(200)?.toFixed(2));
// console.log(notNull(null));

function tipoDado<T>(a: T): { dado: T; tipo: string } {
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

function extractText<Tipo extends HTMLElement>(el: Tipo) {
  return { texto: el.innerText, el };
}

const link = document.querySelector("a");

// if (link) console.log(extractText(link));
// if (link) console.log(extractText(link).el);
// if (link) console.log(extractText(link).texto.toUpperCase());

// criando uma funcao que seleciona os elementos igual jQuery
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link2 = $<HTMLAnchorElement>("a");

// Metodos
// Metodos nativos sao definidos utilizando generics, assim podemos indicar durante a execucao qual sera o tipo esperado.

const link3 = document.querySelector<HTMLVideoElement>(".link");
if (link3 instanceof HTMLVideoElement) link3?.volume;
console.log(link3 instanceof HTMLVideoElement);

async function getData<T>(url: string): Promise<T> {
  const r = await fetch(url);
  return await r.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook);
}

handleData();
