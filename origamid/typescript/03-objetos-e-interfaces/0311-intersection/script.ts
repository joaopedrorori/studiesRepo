// Intersection
// Funciona em parte como o extends para interfaces, mas pode ser utilizado em Types

type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});

// Adicionar Propriedades
// Eh possivel adicionar uma propriedade a uma interface/tipo que ja ta definido

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & /*nao permite nome repetido*/ {
  preco: number;
};

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro /*so colocar o msm nome e adicionar a propriedade*/ {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {}

// Window
// Se definimos uma propriedade global, podemos "extender" a interface de Window, apenas redeclarando a interface.

// window.userId = 200;//propriedade nao existe no window ainda, ts nao deixa usar
interface Window {
  userId: number; //agora ele existe
}

window.userId = 200;
console.log(window.userId);
