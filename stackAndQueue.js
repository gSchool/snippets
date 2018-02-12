class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

let myNode = new Node(3);
console.log(myNode);

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    let newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top) {
      let item = this.top.data;
      this.top = this.top.next;
      return item;
    }
    else {
      return null;
    }
  }
}

let myStack = new Stack();
myStack.push(7);
myStack.push(6);
console.log(myStack.pop());
console.log(myStack.pop());

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    if(!this.first) {
      this.last = new Node(item);
      this.first = this.last;
    }
    else {
      this.last.next = new Node(item);
      this.last = this.last.next;
    }
  }

  dequeue(item) {
    if(this.first) {
      let item = this.first.data;
      this.first = this.first.next;
      if(!this.first) { this.last = null; }
      return item;
    }
    return null
  }
}

let myQueue = new Queue();
myQueue.enqueue(7);
myQueue.enqueue(6);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
