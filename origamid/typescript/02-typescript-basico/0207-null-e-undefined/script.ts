// null
// null eh um tipo primitivo que representa a ausencia de valor.
// Eh bem comum em funcoes do DOM que fazem uma busca, retornarem null quando nao sao bem sucedidas

const button = document.querySelector("button");
// : HTMLButtonElement | null
const config = localStorage.getItem("config");
// : string | null

if (button !== null) button.click();

if (button) button.click();

button?.click();

// undefined
// Representa variaveis/propriedades que foram instanciadas, mas seus valores nao foram definidos.
let total;
// console.log(total); //undefined
function teste() {}
// console.log(teste()); //undefined
// console.log(typeof undefined);

// Propriedades Opcionais
// Podemos definir propriedades opcionais utilizando "opcional? string".
// Quando opcional, elas poderao sempre retornar como o valor definido ou undefined.
interface Product {
  nome?: string;
}
const livro: Product = {};
const jogo: Product = { nome: "CoD" };

jogo.nome?.toLocaleLowerCase();
livro.nome?.toLocaleLowerCase();

// strictNullChecks
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.

// tsconfig.json:
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true, // já incluso no strict
//     "strictNullChecks": true
//   }
// }