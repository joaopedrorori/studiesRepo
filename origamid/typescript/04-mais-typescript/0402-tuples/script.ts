// Tuples
// Sao arrays que possuem dados em posicoes fixas
const produto1: (string | number)[] = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];

// console.log(produto2[0]?.toLowerCase());

const [nome, preco] = produto2;
// console.log(nome, preco);

// as const
// Torna um dado readonly e infere o tipo de dado mais especifico possivel.
// Em metodos que retornam Array's, as mesmas sao transformadas em tuples

//sem as const:
// function getText(selector: string): null | [HTMLElement, string] {
//   const el = document.querySelector<HTMLElement>(selector);
//   if (el) return [el, el.innerText];
//   else return null;
// }
// com as const:
function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) return [el, el.innerText] as const;
  else return null;
}

const button = getText("button");
if (button) {
  button[0].classList;
  // button[1] = "teste"//Cannot assign to '1' because it is a read-only property.
}

// Exercicio
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
type Produto = [string, number, string, { marca: string; cor: string }];

const showPrice = (arr: Produto[]) => {
  const sum = arr?.reduce((acc, curr) => acc + curr[1], 0);
  if (sum) document.body.innerHTML += `Total: R$${sum}`;
}

async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  if (data) showPrice(data);
  return data;
}
fetchVendas();
