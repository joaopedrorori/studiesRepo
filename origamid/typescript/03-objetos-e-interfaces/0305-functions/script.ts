// Functions
// A interface de uma funcao eh definida durante a sua declaracao

function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

somar(1, 2);
somar(1, 2, 3);

const subtrair = (a: number, b: number): number => a - b;

subtrair(4, 3);

type Callback = (event: MouseEvent) => void;

// Void
// No js, uma funcao sem um return ira retornar undefined.
// No TypeScript o retorno eh definido como void
// Isso evita usos errados como checagens booleanas de metodos que nao possuem retorno

function pintarTela(cor: string): void {
  document.body.style.background = cor;
}
// if (pintarTela("black")) console.log("Pintou tela"); //o void vai impedir esse tipo de checagem
// else console.log("nao pintou");

// console.log(pintarTela("black"));
pintarTela("black");

const btn = document.querySelector("button");

btn?.click();
// HTMLElement.click(): void

function isString(value: any) /*: true | undefined */ {
  if (typeof value === "string") return true;
}

// console.log(isString("teste"));
// console.log(isString(200));

// Never
// O never eh utilizado em casos onde a funcao gera um erro ou termina uma aplicacao

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}
// abortar("Erro 404");
//console.log("tente novamente");//nao vai ser executado e o ts avisa isso deixando o codigo cinzento

// Métodos
// Na definicao de interfaces podemos definir os metodos indicando o tipo de dado recebido e o seu possivel retorno

interface Quadrado {
  lado: number;
  permitro(lado: number): number;
}

function calcular(forma: Quadrado) {
  return forma.permitro(3);
}

// Overload (MAIS IMPORTANTE)
// Existem funcoes que retornam diferentes dados dependendo do argumento.
// Podemos declarar a interface dessas funcoes utilizando function overload.
// Basta declarar a interface antes da definicao da mesma, utilizando o mesmo nome.
// O oberload deve ser compativel com a funcao original

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") return valor.trim().toLowerCase();
  else return valor.map((item) => item.trim().toLowerCase());
}
// console.log(normalizar("   Produto  ").toUpperCase());
// console.log(normalizar(["   Produto  ", "  UVA  ", " bananA "]));

function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.addEventListener("click", () => "teste");
$("video")?.volume;

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function upNumber(n: string): string;
function upNumber(n: number): number;
function upNumber(n: string | number): string | number {
  if (typeof n === "string") return Math.ceil(Number(n)).toString();
  else return Number(Math.ceil(n));
}

console.log(upNumber("3.45"));
console.log(upNumber(3.45));
