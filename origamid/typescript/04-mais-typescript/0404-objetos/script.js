"use strict";
// Objetos
// Duck Typing
// Um objeto quando passado em uma funcao pode conter propriedades e metodos alem dos declarados na interface.
const produto1 = {
    nome: "notebook",
    quantidade: 10,
    cor: "azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};
const servico = {
    nome: "Instalacao",
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
// mostrarQuantidade(produto1); //nao eh do type Produto, mas tem as mesmas propriedades e algumas a mais
// mostrarQuantidade(produto2);
// mostrarQuantidade(servico);//tem nome como semelhanca ao Produto mas possui propriedade a menos, por isso retorna o erro
// Partial
// O typescript conta com um utility types, tipos que podem ser utilizados como funcoes para a definicao de novos tipos
// Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo sao opcionais
// Partial<Produto>
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade)
        console.log(produto.quantidade + 20);
}
const artigo = {
    titulo: "Como aprender hmtl",
    visualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: "Joao Pedro",
};
artigo.autor; //me deixa utilizar, nao da erro, mas nao me da a sugestao da propriedade porque ela nao ta na interface de Post
artigo.descricao; //me deixa usar mesmo que nao exista nem no objeto, mas nao deixa eu fazer operacao porque eh unknown
function mostrarTitulo(obj) {
    if ("titulo" in obj)
        console.log(obj.titulo);
}
// mostrarTitulo(200); //da erro pq so me deixa passar objeto
mostrarTitulo({
    titulo: "HTML E CSS",
    autor: "Joao",
});
