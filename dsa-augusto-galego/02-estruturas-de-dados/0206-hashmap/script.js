console.clear();
// Hashmaps
// [].get("joao") => "branco"
// O(1);
// Hash Function
// trnasforma um input em um valor e esse valor vai ser a posicao no array onde ta armazenado o item que a gente quer pegar
//
const meuMap = new Map();
meuMap.set("Joao Pedro", { age: 22, sex: "male" });
meuMap.set("Gabriela Magalhaes", { age: 22, sex: "female" });
console.log(meuMap);
console.log(meuMap.get("Joao Pedro"));
console.log(meuMap.delete("Joao Pedro"));
console.log(meuMap.has("Joao Pedro"));
console.log(meuMap.has("Gabriela Magalhaes"));
