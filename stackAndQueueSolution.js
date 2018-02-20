let Queue = require('./Queue.js')
let Node = require('./Node.js')

let myNode = new Node(3);
console.log("myNode", myNode);

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    console.log("pushing item into stack")
    let newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    console.log("popping item off stack")
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
console.log("myStack", myStack);
myStack.push(7);
myStack.push(6);
console.log("myStack", myStack);
myStack.pop();
myStack.pop();
console.log("myStack", myStack);

let myQueue = new Queue();
console.log("myQueue", myQueue);
myQueue.enqueue(7);
myQueue.enqueue(6);
console.log("myQueue", myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log("myQueue", myQueue);
