// No momento o JavaScript não possui uma forma de indicarmos qual será o tipo de dado. Não é possível prever o argumento que será passado no parâmetro de funções, para isso são necessárias as anotações de tipos.

const produtos = [
  {
    nome: "O Senhor dos Anéis",
    tipo: "livro",
  },
  {
    nome: "A Guerra dos Tronos",
    tipo: "livro",
  },
  {
    nome: "Dark Souls",
    tipo: "jogo",
  },
];

function filtrarLivros(dados) {
  return dados.filter((item) => item.tipo === "livro");
}

console.log(filtrarLivros(produtos));
