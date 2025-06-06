// Eventos
// EventHandler
// Eh possivel definir o elemento em que o EventHandler sera usado.
// Assim o currentTarget sera definido corretamente.
import React from "react";
import Checkbox from "./Checkbox";

function App() {
  return (
    <div>
      <Checkbox label="Termos e Condicoes" />
    </div>
  );
}

export default App;
// Função Anônima
// Se definirmos uma funcao anonima diretamente no evento, o TypeScript conseguira inferir o tipo de evento e o elemento do mesmo.

