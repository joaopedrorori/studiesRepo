import React from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <div>
      {/* aula: */}
      {/* <p>{total}</p>
      <Button className="btn" onClick={incrementar} tamanho="1.25rem">
        Incrementar
      </Button> */}
      {/* Exercicio */}
      {/*1 - Crie um componente Input*/}
      {/*2 - Ele deve retornar <label> e <input>, dentro de uma <div>*/}
      {/*3 - Recebe uma propriedade chamada label*/}
      {/*4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>*/}
      {/*5 - Permita o uso de qualquer propriedade de input no componente Input.*/}
      {/*6 - Adicione 1rem de marginBottom na <div>*/}
      <Input
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        label="nome"
        marginB="1rem"
      >
        Nome
      </Input>
      <p>{nome}</p>
      <Input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        label="email"
        marginB="1rem"
      >
        Email
      </Input>
      <p>{email}</p>
      <Input
        value={senha}
        onChange={({ target }) => setSenha(target.value)}
        label="senha"
        marginB="1rem"
        type="password"
      >
        Senha
      </Input>
      <p>{senha}</p>
    </div>
  );
}

export default App;
// Props
// É preciso anotar as props que um componente recebe.
