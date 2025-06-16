import React from "react";
import Form from "./Form";
// useReducer TSX
// Com o TypeScript podemos definir as possíveis Actions como um tipo, facilitando o uso do Reducer.

const App = () => {
  return (
    <div>
      <h1>Formulario</h1>
      <Form />
    </div>
  );
};

export default App;
