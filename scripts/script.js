function print() {
  const arr = [];
  let currentNode = this.head;

  while (currentNode !== null) {
    arr.push(currentNode);
    currentNode = currentNode.next;
  }

  console.log(arr);
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.length = 0;
  }

  printQueue() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = this.tail = newNode;
      return this.length++;
    }

    this.tail.next = newNode;
    this.tail = newNode
    this.length++;
    this.printQueue();
  }

  dequeue() {
    if (!this.length) return undefined;
    const frontOfQueue = this.head;

    if(this.length === 1) {
      this.head = this. tail = null;
      return frontOfQueue;
    }

    this.head = this.head.next;
    return frontOfQueue;
  }
}

const queueList = new QueueLinkedList();

queueList.enqueue(5);
queueList.enqueue(12);
queueList.enqueue(666);
queueList.dequeue();
const twelve = queueList.dequeue();
console.log(twelve)
