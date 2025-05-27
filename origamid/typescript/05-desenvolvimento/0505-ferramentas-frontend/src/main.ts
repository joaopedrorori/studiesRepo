import _ from "lodash";
import ClipboardJS from "clipboard";

const btn = new ClipboardJS("button");
function handleCopy(event: ClipboardJS.Event) {
  console.log(event.text);
}
btn.on("success", handleCopy);

console.log(_.difference([1, 2, 3, 5], [1, 2, 3, 4]));

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: "O senhor dos aneis",
};
