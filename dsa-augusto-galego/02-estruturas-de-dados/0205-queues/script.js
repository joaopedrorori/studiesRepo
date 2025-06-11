// Queue / Fila
// First in First out (FIFO)
// 1, 2, 3 => o 1 sai primeiro, dps o 2, e entao o 3
// Implementacao padrao eh usando linked lists
// 1 => 2 => 3
// Para adicionar um elemento
// 1 => 2 => 3 => 4
// Para remover um elemento
// 2 => 3 => 4
// Queue bem implementada tem referencia apontando para o inicio e para o fim
// (head) 1 => 2 => 3 => 4 (tail)

// Dequeue
// Precisa ser um doubled linked list
// Pode deletar e inserir elementos tanto de um lado quanto do outro
class Queue {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao final da fila
  enqueue(element) {
    this.items.push(element);
  }

  // Remove e retorna o elemento do início da fila
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; // Retorna um aviso se a fila estiver vazia
    }
    return this.items.shift();
  }

  // Retorna o elemento do início da fila sem removê-lo
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o número de elementos na fila
  size() {
    return this.items.length;
  }
}

// Exemplo de uso:
const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
