// instaceof
// Existem funcoes que retornam diferentes tipos de objeto.
// Com a keyword instanceof podemos verificar se um objeto eh uma instancia (foi construido ou herda) de uma funcao construtora(class)

// extends
// o instanceof verifica se a funcao construtora herda de outra (extends).

class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}
const livro = new Produto("A Guerra dos Tronos");

// console.log(livro instanceof Produto);
// console.log(livro instanceof Array);

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") return new Livro("O Hobbit", "J. R. R. Tolkein");
  if (busca === "Dark Souls") return new Jogo("Dark Souls", 1);
  return null;
}

const produto = buscarProduto("Dark Souls");
if (produto instanceof Livro) console.log(produto.nome);

if (produto instanceof Produto) {
  // console.log(produto.nome); //por estar verificando se eh instanceof Produto, so me deixa usar propriedades e metodos de Produto
}

//instanceof e interface
//O instanceof é um operador que existe no JavaScript. Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface.

interface Carro {
  nome: string;
}
const honda: Carro = {
  nome: "Honda",
};
// console.log(honda);
// console.log(honda instanceof Carro); //Erro no runtime porque carro deve ser Class e nao Interface

// Exercício
// 1 - Selecione o link utilizando o método getElementById.
const element = document.getElementById("origamid");
if (element instanceof HTMLAnchorElement) {
  element.href = element.href.replace("http", "https")
}

// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
