// Types e Interface

// Object
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criacao de objetos ":{}"
function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "Sim" : "Nao"}</p>
  </div>
  `;
}

// preencherDados({
//   nome: "Computador",
//   preco: 2000,
//   teclado: false,
// });

// preencherDados({
//   nome: "Notebook",
//   preco: 2500,
//   teclado: true,
// });

// Type
// A palavra-chave type cria um atalho(alias) para um tipo customizado

type NumberOrString = number | string;

let total: NumberOrString = 100;
total = "200";

type Categorias = "design" | "codigo" | "descod";
function pintarCategoria(categoria: Categorias) {
  console.log(categoria);
}

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

const computador: Produto = {
  nome: "Computador",
  preco: 2000,
  teclado: false,
};
const notebook: Produto = {
  nome: "Notebook",
  preco: 2500,
  teclado: true,
};

// Interface
// interface geralmente funciona da mesma forma que o type, porem possui uma sintaxe diferente.
// As interfaces sao geralmente utilizadas para definirmos objetos.
// Definir objetos: use interface
// Definir qualquer outra coisa: use type
// Nas aulas mais avancadas, as diferencas entre elas sarao melhor explicadas

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}
type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

// Exercicio
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

interface EmpresasParceiras {
  nome: string;
  fundacao: number;
  pais: string;
}
interface ProdutoExercicio {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: EmpresasParceiras;
  empresaMontadora: EmpresasParceiras;
}

function showProduct(data: ProdutoExercicio) {
  document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
  </div>
  `;
}

async function fetchProduct(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  showProduct(data);
}

fetchProduct("https://api.origamid.dev/json/notebook.json");
