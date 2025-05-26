// Classes
// As classes/funcoes construtoras sao responsaveis pela construcao de objetos que ja vimos.
// Como MouseEvent, HTMLElement e os demais
// class Produto {
//   nome: string; //ao fazer um constructor, tem que declarar o tipo da propriedade antes de declara-la
//   preco: number | undefined;
//   constructor(nome: string, preco?: number) {
//     this.nome = nome;
//     this.preco = preco;
//   }
//   tipo = "produto";
// }

// const livro = new Produto("O Senhor dos Aneis", 300);

// console.log(livro);
// console.log(livro.nome);
// console.log(livro.tipo);
// console.log(livro.preco);

// Modificadores
// O TS forncece diversas palavras-chave (Modifiers) que podem ser utilizadas em propriedades de classes para modificar o comportamento/uso das mesmas.

class Produto {
  readonly tipo = "produto"; //palavra chave DO TYPESCRIPT que só permite leitura (de fora da classe)
  private paginas: number; //palavra chave do TYPESCRIPT que só pode ser acessada dentro da classe
  protected unidVend: number; //palavra chave do TYPESCRIPT que só pode ser acessada dentro da classe e subclasses
  nome: string; //ao fazer um constructor, tem que declarar o tipo da propriedade antes de declara-la
  preco: number;
  constructor(nome: string, preco: number, paginas: number, unidVend: number) {
    this.nome = nome;
    this.preco = preco;
    this.paginas = paginas;
    this.unidVend = unidVend;
  }
  getPag() {
    return this.paginas; //eu so consigo acessar a propriedade de dentro do construtor
  }
  getPreco() {
    return Produto.transformarPreco(this.preco);
  }
  static transformarPreco(
    preco: number
  ) /*palavra chave do JAVASCRIPT que faz o metodo/propriedade fazer parte DA FUNCAO CONSTRUTORA e NAO do Objeto criado*/ {
    return `R$${preco}`;
  }
}

class Livro extends Produto {
  //aqui a gente continuar sem ter acesso ao "private"
  //mas tem acesso ao "protected"
}

const livro = new Produto("O Senhor dos Aneis", 300, 600, 1000);

// console.log(livro);
// console.log(livro.nome);
// console.log(livro.tipo);
// console.log(livro.preco);
// console.log(livro.paginas);//Property 'paginas' is private and only accessible within class 'Produto'.
// console.log(livro.getPag());
// console.log(livro.unidVend);//Property 'unidVend' is protected and only accessible within class 'Produto' and its subclasses.ts(2445)
// console.log(livro.transformarPreco());//Property 'transformarPreco' does not exist on type 'Produto'. Did you mean to access the static member 'Produto.transformarPreco' instead?
// console.log(livro.getPreco()); //ai ele deixa pq o getPreco usa o transformarPreco diretamente dentro dele

// Classes e Interface
// Ao definirmos uma classe, a sua interface eh gerada automaticamente pelo TypeScript.
// A definicao da classe eh o que utilizamos para verificar se um objeto eh uma instancia da mesma instanceof class

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

class Circulo {
  readonly PI = Math.PI;
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100;
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
  }
}

const q1 = new Quadrado(10);

if (q1 instanceof Quadrado) {
  console.log(q1.getArea());
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
  if (n < 15) {
    return new Quadrado(n);
  } else {
    return new Circulo(n);
  }
});

formas.forEach((forma) => {
  if (forma instanceof Quadrado) console.log(forma.lados);
  if (forma instanceof Circulo) console.log(forma.raio);
});
