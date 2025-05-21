// // Eventos e Callback

// // Eventos
// // Passamos o evento como uma string e uma funcao de callback no metodo addEventListener.
// // A funcao de callback possui um parametro que faz referencia ao evento executado.

// const btn = document.querySelector("button");

// function handleClick(event: PointerEvent) {
//   console.log(event);
// }

// btn?.addEventListener("pointerdown", handleClick);

// function handleScroll(event: Event) {
//   console.log(event);
// }
// // window.addEventListener("scroll", handleScroll);

// // Event e instanceof
// // Uma funcao, quando criada para ser executada em diferentes tipos de eventos, deve receber como parametro o tipo comum entre elas "Event"
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) console.log(event);
//   if (event instanceof TouchEvent) console.log(event.touches);
//   if (event instanceof KeyboardEvent) console.log(event.key);
// }

// // document.documentElement.addEventListener("mousedown", ativarMenu);
// // document.documentElement.addEventListener("touchstart", ativarMenu);
// // document.documentElement.addEventListener("keydown", ativarMenu);

// // this
// // Dentro de uma funcao, o this faz referencia ao objeto que executou a mesma.
// // No JS o this pode ser passado como o primeiro parametro da funcao, mesmo nao sendo necessario informar ele durante a execucao
// // function ativarMenuThis(this: HTMLButtonElement, event: MouseEvent) {
// //   console.log(this.innerText);
// // }
// // btn?.addEventListener("click", ativarMenuThis);

// // target e currentTarget
// // O TypeScript não executa o JavaScript, assim ele não consegue assumir qual será o target ou currentTarget do evento executado.
// // Os elementos são definidos como o tipo EventTarget, pois esse é o tipo mais comum entre os elementos que podem receber um evento.
// function ativarMenuThis(event: MouseEvent) {
//   const element = event.currentTarget;
//   if (element instanceof HTMLButtonElement) console.log(element.innerText);
// }
// // btn?.addEventListener("click", ativarMenuThis);

// Exercício
// Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
const btnNavMobile = document.getElementById("btn-mobile");

function abrirMenuMobile(event: PointerEvent) {
  const navBar = document.getElementById("nav");
  const active = navBar?.classList.contains("active");
  navBar?.classList.toggle("active");
  if (active) {
    btnNavMobile?.setAttribute("aria-expanded", "false");
    btnNavMobile?.setAttribute("aria-label", "Abrir Menu");
  } else {
    btnNavMobile?.setAttribute("aria-expanded", "true");
    btnNavMobile?.setAttribute("aria-label", "Fechar Menu");
  }
}
btnNavMobile?.addEventListener("pointerdown", abrirMenuMobile);
