// as
// Com o type assertion eh possivel indicar ao ts qual o tipo de dado esperado com a palavra-chave as.
// So eh possivel indicar tipo que possuam uma relacao com o tipo original.
// Evitar o maximo o use de type assertion, pois a type safety eh perdida quando indicamos algo que nem sempre sera verdade.

const video = document.querySelector(".player") as HTMLVideoElement;
// video.volume;//TypeError: Cannot read properties of null
// erro runtime, nao existe volume de null

// const link = document.querySelector(".link") as string;
// erro ts, possiveis dados devem ser compativeis com Element | null

// any
// Podemos usar o type assertion para definir que um tipo any eh qualquer tipo de dado possivel
interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  // console.log((produto as Produto).nome);
  // console.log(produto.nome);
}
handleProduto();

//! non-null operator
// Indica que nao existe a possibilidade do dado ser null.
// Cuidado com o uso, pois pode levar a erros no runtime.
// Use apenas se tiver certeza
// Esse eh um operador de TS "!." e nao de js como o "?.".
// Durante a compilacao ele sera removido
const video0 = document.querySelector("video")!;
// video?.volume;//isso aqui eh js, verifica se eh true, se sim, da a propriedade volume
// video.volume//nao da erro aqui e sim no runtime, pq com a exclamacao eu to dizendo "isso aqui sempre vai existir, CONFIA"

// document.querySelector("a")!.href = "https://www.joaopedrorori.com"
// ts permitiu mas o runtime deu erro pq esse a nao existe

// Outras Sintaxes
const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
const video4 = document.querySelector(".player");
(video4 as HTMLVideoElement).volume;
