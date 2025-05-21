"use strict";
// instaceof
// Existem funcoes que retornam diferentes tipos de objeto.
// Com a keyword instanceof podemos verificar se um objeto eh uma instancia (foi construido ou herda) de uma funcao construtora(class)
// extends
// o instanceof verifica se a funcao construtora herda de outra (extends).
class Produto {
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto("A Guerra dos Tronos");
// console.log(livro instanceof Produto);
// console.log(livro instanceof Array);
class Livro extends Produto {
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit")
        return new Livro("O Hobbit", "J. R. R. Tolkein");
    if (busca === "Dark Souls")
        return new Jogo("Dark Souls", 1);
    return null;
}
const produto = buscarProduto("Dark Souls");
if (produto instanceof Livro)
    console.log(produto.nome);
if (produto instanceof Produto) {
    // console.log(produto.nome); //por estar verificando se eh instanceof Produto, so me deixa usar propriedades e metodos de Produto
}
const honda = {
    nome: "Honda",
};
// console.log(honda);
// console.log(honda instanceof Carro); //Erro no runtime porque carro deve ser Class e nao Interface
// Exercício
// 1 - Selecione o link utilizando o método getElementById.
const element = document.getElementById("origamid");
if (element instanceof HTMLAnchorElement) {
    element.href = element.href.replace("http", "https");
}
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
