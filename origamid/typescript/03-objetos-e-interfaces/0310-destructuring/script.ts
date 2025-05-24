// Destructuring
// Durante a desestrututracao de objetos, podemos indicar o tipo de dado com a sintaxe:
// { key1, key2 }: { key1: type1; key2: type2; }

const { body }: { body: HTMLElement } = document;

// function handleData({ nome, preco }: { nome: string; preco?: number }) {
//   nome.includes("book");
//   preco?.toFixed();
// }

// handleData({
//   nome: "Notebook",
//   preco: 500,
// });
///
// ou
///
interface Produto {
  nome: string;
  preco?: number;
}
function handleData({ nome, preco }: Produto) {
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 500,
});

// Conhecer os Dados
// Durante uma desestruturacao eh necessario indicar o tipo exato do dado esperado pelo TypeScript.
// Ex.: Um currentTarget pode ser EventTarget | null

// function handleClick({
//   currentTarget,
//   pageX,
// }: {
//   currentTarget: EventTarget | null;
//   pageX: number;
// }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse clicou em ${pageX}</h1>`;
//   }
// }
///
//ou
///
function handleClick({ currentTarget, pageX }: MouseEvent) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse clicou em ${pageX}</h1>`;
  }
}
// document.documentElement.addEventListener("pointerdown", handleClick);
// document.documentElement.addEventListener("touchstart", handleClick);

// ...rest
// O operador ...rest retorna uma Array
function comparar(tipo: "maior" | "menor", ...numeros: number[]) {
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 20, 10, 30, 1));
console.log(comparar("maior", 3, 4, 5, 6, 7, 20, 10, 30, 1));
