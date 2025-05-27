// Declaration files
// .d.ts
// Podemos criar arquivos focados apenas na declaracao de tipos e interfaces, estes devem ser terminados em .d.ts
// O TypeScript nao ira compilar eles, mas os tipos declarados poderao ser utilizados globalmente na sua aplicacao.
// Esse tipo de declaracao eh comum em bibliotecas criadas em JS que desejam dar suporte ao uso da mesma em TS
export const livro: Produto = {
  // ta la em types/global.d.ts
  nome: "O senhor dos aneis",
  preco: 2000,
  cor: "preto",
};

// Declaração Global
// Nao eh necessario criar um arquivo global ou .d.ts para ter um tipo global.
// Eh possivel tambem declarar dentro de um arquivo do tipo module, usando o declare global{}

declare global {
  interface User {
    nome: string;
    id: number;
  }
}

// Evite Globais
// Use apenas quando necessário.
// Assim como variáveis globais são problemáticas, tipos globais possuem os mesmos problemas.

// interface Produto {
//   nome: string;
//   preco: string;
// }

// const livro2: Produto = {
//   nome: "Hobbit",
//   // preco: 200,//deu erro pq nao eh mais number e sim string, o script sobrescreveu
//   preco: "R$200", //
// };

// declaration
// A configuracao declaration: true, gera arquivos .d.ts automaticament, com base nas interfaces dos arquivos .ts compilados
// Apenas o que for exportado ou global fara parte do arquivo .d.ts
