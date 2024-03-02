class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    let currentIndex = 0;
    let currentNode = this.head;
    const newNode = new Node(value);

    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    newNode.next = currentNode;
    newNode.prev = currentNode.prev;
    newNode.prev.next = newNode;
    currentNode.prev = newNode;

    this.length++;
    console.log(this);
    return this;
  }

  remove(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index - 1) {
      this.currentNode = currentNode.next;
      currentIndex++;
    }

    const targetNode = currentNode.next;
    currentNode.next = targetNode.next;
    targetNode.next.prev = currentNode;
    this.length--;
    return this;
  }

  reverseTo(index) {
    let currentIndex = this.length - 1;
    let currentNode = this.tail;

    while(currentIndex !== index) {
      currentNode = currentNode.prev;
      currentIndex--;
      console.log(currentNode);
    }
  }
}

const linkedList = new DoublyLinkedList(10);

linkedList.insert(0, 5);
linkedList.insert(1, 66);

linkedList.printList();

linkedList.reverseTo(0);
