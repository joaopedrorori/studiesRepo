// Trie
// Prefix - tree
// Conforme a gente desce a arvore a gente vai adicionando um prefixo
// autocomplete usa isso * -> g -> ge -> get
//                       * -> g -> go

/**
 * Representa um único nó na Trie.
 * Cada nó possui um mapa para seus filhos e um marcador
 * que indica se o caminho até ele forma uma palavra completa.
 */
class TrieNode {
  constructor() {
    // A estrutura Map é ideal para armazenar os filhos,
    // onde a chave é o caractere e o valor é o próximo TrieNode.
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

/**
 * A classe principal da Trie, que gerencia a inserção e busca de palavras.
 */
class Trie {
  constructor() {
    // A raiz da Trie é um nó vazio que serve como o ponto de partida.
    this.root = new TrieNode();
  }

  /**
   * Insere uma palavra na Trie, caractere por caractere.
   * @param {string} word A palavra a ser inserida.
   */
  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      // Se o caractere não existir como um filho do nó atual,
      // criamos um novo nó para ele.
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      // Avançamos para o próximo nó na árvore.
      currentNode = currentNode.children.get(char);
    }
    // No final do loop, marcamos o último nó como o final de uma palavra válida.
    currentNode.isEndOfWord = true;
  }

  /**
   * Procura por uma palavra completa na Trie.
   * Para ser verdadeiro, o caminho completo deve existir e o último nó
   * deve estar marcado como o fim de uma palavra.
   * @param {string} word A palavra a ser procurada.
   * @returns {boolean} Retorna true se a palavra completa for encontrada.
   */
  search(word) {
    let currentNode = this.root;
    for (const char of word) {
      // Se em qualquer ponto o caractere não for encontrado,
      // a palavra não existe na Trie.
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    // Retorna true apenas se o caminho completo foi percorrido E
    // o último nó está marcado como o fim de uma palavra.
    return currentNode.isEndOfWord;
  }

  /**
   * Verifica se existe alguma palavra na Trie que começa com um
   * determinado prefixo.
   * @param {string} prefix O prefixo a ser verificado.
   * @returns {boolean} Retorna true se o prefixo existir.
   */
  startsWith(prefix) {
    let currentNode = this.root;
    for (const char of prefix) {
      // Se o caminho do prefixo for quebrado em algum ponto, ele não existe.
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    // Se o loop terminar, significa que o caminho do prefixo foi encontrado.
    return true;
  }
}

// --- Exemplo de Utilização ---

// 1. Criar uma nova instância da Trie
const autocompleteTrie = new Trie();

// 2. Inserir algumas palavras
console.log("Inserindo palavras: 'gato', 'gata', 'gelo', 'gota', 'pato'");
autocompleteTrie.insert("gato");
autocompleteTrie.insert("gata");
autocompleteTrie.insert("gelo");
autocompleteTrie.insert("gota");
autocompleteTrie.insert("pato");

// 3. Testar a busca por palavras completas (search)
console.log("\n--- Testando a busca (search) ---");
console.log("A palavra 'gato' existe?", autocompleteTrie.search("gato")); // Saída: true
console.log("A palavra 'gat' existe?", autocompleteTrie.search("gat")); // Saída: false (é um prefixo, mas não uma palavra completa)
console.log("A palavra 'gel' existe?", autocompleteTrie.search("gel")); // Saída: false
console.log("A palavra 'pato' existe?", autocompleteTrie.search("pato")); // Saída: true
console.log("A palavra 'peixe' existe?", autocompleteTrie.search("peixe")); // Saída: false

// 4. Testar a busca por prefixos (startsWith)
console.log("\n--- Testando prefixos (startsWith) ---");
console.log(
  "Existe palavra que começa com 'gat'?",
  autocompleteTrie.startsWith("gat")
); // Saída: true
console.log(
  "Existe palavra que começa com 'ge'?",
  autocompleteTrie.startsWith("ge")
); // Saída: true
console.log(
  "Existe palavra que começa com 'go'?",
  autocompleteTrie.startsWith("go")
); // Saída: true
console.log(
  "Existe palavra que começa com 'pa'?",
  autocompleteTrie.startsWith("pa")
); // Saída: true
console.log(
  "Existe palavra que começa com 'x'?",
  autocompleteTrie.startsWith("x")
); // Saída: false

console.log(autocompleteTrie.search("gato"));
console.log(autocompleteTrie.search("joao"));
