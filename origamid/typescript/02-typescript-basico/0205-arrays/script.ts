// Arrays
// Uma array eh definida com o tipo de dado(s) que ela possui, seguida por []

const numeros = [10, 30, 40, 5, 3, 30];
// : number[]
const valores = [10, "Taxas", 40, "Produto", 3, 30];
// : (string | number)[]

function maiorQue10(data: number[]) {
  return data.filter((num) => num > 10);
}
function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "number");
}

// console.log(maiorQue10(numeros));
// console.log(filtrarValores(valores));

const dados = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120],
];
// : (string | number)[][]

// Sintaxe Alternativa
// Existe uma sintaxe alternativa, onde usamos Array<type>
// Sendo type o tipo de dado dentro da array

const novosNumeros = [10, 30, 40, 5, 3, 30];

function maiorQue20(data: Array<number>) {
  return data.filter((num) => num > 20);
}

// Exercício
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

function mostraTela(data: Curso[]) {
  data.forEach((item) => {
    let color = null;

    if (item.nivel === "iniciante") {
      color = "blue";
    } else {
      color = "red";
    }

    document.body.innerHTML += `
    <h1 style="color:${color}">${item.nome}</h1>
    <p>${item.aulas} aulas em ${item.horas} horas de curso</p>
    <p>${item.gratuito ? "gratuito" : "pago"}</p>
    <span>${item.tags.join(", ")}</span>
    `;
  });
}

async function fetchApi(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  mostraTela(data);
}

fetchApi("https://api.origamid.dev/json/cursos.json");
