// Stack / Pilha
// Last In First Out
// LIFO
class Stack {
  constructor() {
    this.items = [];
  }
  put(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return "Stack empty";
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return "Stack empty";
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

const myStack = new Stack();
myStack.put("joao");
myStack.put("gabi");
myStack.put("bia");
myStack.put("dack");
console.log(myStack.items);
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
