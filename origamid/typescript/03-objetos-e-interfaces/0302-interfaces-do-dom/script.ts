// interfaces do DOM
// querySelector
// Quando selecionamos um elemento do DOM com o querySelector,
//  o objeto retornado dependera da string que passamos no metodo
// https://developer.mozilla.org/en-US/docs/Web/API

// const video = document.querySelector("video");

// if (video instanceof HTMLVideoElement) console.log(video.volume);

// querySelectorAll
// Este retorna uma NodeList de elementos.
// Nao confundir o nome da interface NodeListOf com o nome da classe NodeList

// const links = document.querySelectorAll(".link");
// console.log(links instanceof NodeList);

// links.forEach((link) => {
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link.href);
//   } else {
//     console.log(typeof link);
//   }
// });

// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);
// erro, filter é um método de Array e não de NodeList

// Funciona, pq a NodeList foi transformada em uma Array
// const anchorLinks = Array.from(links).filter(
//   (link) => link instanceof HTMLAnchorElement
// );

// Exercício
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const links = document.querySelectorAll(".link");

links?.forEach((link) => {
  if (link instanceof HTMLElement) changeColor(link);
});

function changeColor(item: HTMLElement) {
  item.style.color = "red";
  item.style.border = "2px solid green";
}
