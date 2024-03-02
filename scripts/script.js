class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      arr.push(currentNode);
    }
    return arr;
  }

  insert(index, value) {
    let currentIndex = 0;
    let currentNode = this.head;
    const newNode = new Node(value);

    while (currentIndex < index) {
      console.log(currentNode);
      currentNode = currentNode.next;
      currentIndex++;
    }
    
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return this;
  }
}

const linkedList = new LinkedList(10);

linkedList.prepend(5);
linkedList.prepend(16);
linkedList.prepend(86);
linkedList.append(15);

// 86, 16, 5, 10, 15

console.log(linkedList.insert(2, 33));
