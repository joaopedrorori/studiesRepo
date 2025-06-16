// Exercicio
// 1 - Este hook deve retornar a interface:
// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }
// Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.
// 2 - data, loading e error são estados reativos (useState).
// 3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).
// 4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.
// 5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.
// 6 - Teste o Hook com a api: https://data.origamid.dev/produtos

import React from "react";
import useFetch from "./useFetch";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

const App = () => {
  const [id, setId] = React.useState("p001");
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos");
  const produto = useFetch<Produto>(
    `https://data.origamid.dev/produtos/${id}`,
    { cache: "force-cache" }
  );

  return (
    <section className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button
              onClick={() => setId(produto.id)}
              style={{ fontSize: "1rem" }}
              key={produto.id}
            >
              {produto.id}
            </button>
          ))}
      </div>
      {produto.loading && <p>Loading...</p>}

      <div>
        {produto.data && (
          <ul>
            <li>Id: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Descricao: {produto.data.descricao}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default App;
