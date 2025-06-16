import React from "react";

const App = () => {
  function useEffectCallback() {
    console.log("montou");
    return () => {
      console.log("desmontou");
    };
  }

  // React.useEffect(() => {
  //   console.log("montou");
  //   return () => {
  //     console.log("desmontou");
  //   };
  // }, []);

  React.useEffect(useEffectCallback, []);

  return <div>useEffect</div>;
};

export default App;
// useEffect
// Nao precisamos anotar nenhum tipo especial no useEffect, ele eh um hook que recebe uma funcao
//  que eh ativada no efeito, que retorna uma funcao que eh ativada quando o componente eh desmontado
