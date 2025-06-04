import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar(event: React.MouseEvent) {
    console.log(event);
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>{total}</p>
      <button onClick={incrementar}>{total}</button>
      <Button />
    </div>
  );
}

export default App;
// o Typescript faz um bom trabalho em inferir os tipos de dados no React
