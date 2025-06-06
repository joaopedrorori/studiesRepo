// // Interfaces e Tipos
// // As interfaces de React com TypeScript estao disponiveis diretamente no objeto React importado de react
// import React from "react";
// import Button from "./Button";

// function App() {
//   return (
//     <div>
//       <Button>Incrementar</Button>
//     </div>
//   );
// }

// export default App;

// // JSX.Element
// // Elemento que eh retornado pelo componente.
// // Pode ser tambem:
// //  ->React.ReactElement
// //  ->React.JSX.Element
// // Nao precisamos anotar, pois o React ja infere o mesmo.
// // function App(): JSX.Element

// // Eventos
// // Nao confunda, um evento onClick no React eh um evento proprio do React e nao um evento nativo do JS.
// // O correto eh React.MouseEvent e nao MouseEvent
// // const handleClick = (event: React.MouseEvent) => {
// //   console.log(event.pageX);
// // };

// Exercicio
import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
