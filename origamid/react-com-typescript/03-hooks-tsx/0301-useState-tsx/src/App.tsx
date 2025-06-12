// import React from "react";
// import Button from "./Button";
// // Generics para definir os possiveis tipos: useState<null | User>(null)

// function user() {
//   return {
//     nome: "Joao",
//     profissao: "Programador",
//   };
// }

// type User = {
//   nome: string;
//   profissao: string;
// };

// const App = () => {
//   const [data, setData] = React.useState<null | User>(null);
//   const [total, setTotal] = React.useState(0);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setData(user());
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <div>
//         <Button incrementar={setTotal} />
//         <p>{total}</p>
//       </div>
//       {data !== null && <div>{data.nome}</div>}
//     </div>
//   );
// };

// export default App;

// Exercicio
// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado
// Minha resolucao
import React from "react";
import Input from "./Input";

interface Venda {
  id: string;
  nome: string;
  status: string;
}

const App = () => {
  const [data, setData] = React.useState<null | Venda[]>(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  async function fetchData(inicio?: string, final?: string) {
    try {
      if (inicio !== "" && final !== "") {
        const r = await fetch(
          `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
        );
        const json = await r.json();
        setData(json as Venda[]);
      }
    } catch (e) {
      throw new Error("Error " + e);
    }
  }

  React.useEffect(() => {
    fetchData(inicio, final);
  }, [inicio, final]);

  return (
    <div>
      <Input label="inicio" type="date" setState={setInicio}>
        Data Inicial
      </Input>
      <Input label="final" type="date" setState={setFinal}>
        Data Final
      </Input>
      <ul>
        {data
          ? data.map((item) => (
              <li key={item.id}>
                <p>
                  {item.nome}: <span>{item.status}</span>
                </p>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default App;
