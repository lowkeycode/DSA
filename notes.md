# ZTM - DSA

## Big O

### Intro

We can use benchmarks like `performance.now()` to get a very general idea of how fast a program/function is running but it is not accurate. It will depends on the computer running it, how much CPU it has, what other processes are running etc. This is where Big O comes in as it measures the efficiency by the number of calculations performed so everyone can compare along a relative baseline.

```js
const nemo = ["Nemo"];

const newArr = Array(10000).fill({});

function findNemo(array) {
  let time0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Nemo") {
      console.log("Found nemo!");
    }
  }

  let time1 = performance.now();

  console.log(`Loop took ${time1 - time0} milliseconds`);
}

findNemo(nemo);
findNemo(newArr);
```

### O(n) - Linear Time

One calculation per each element looped over. Or linear time. So if there is only on element in an array, or if there are 100,000 items in an array. A function with a for loop that performs one calculation per element will have the same Big O notation of O(n) regardless of the size of the array

### O(1) - Constant Time

How ever many operations occurs we increase the number in brackets. With Big O we tend to ignore the nitty gritty details and round. So a function like below, even with a large input of 10000, will only perform 2 calculations and always have a Big O of O(2). We still just round down to O(1). Constant time is one of the most predictable, because no matter how many elements we have the same number of operations is performed. Therefore it is one of the most efficient of the Big O notations.

```js
const newArr = Array(10000).fill({});

function constantTime(arr) {
  console.log(arr[0]); // O(1)
  console.log(arr[1]); // O(1)
}

constantTime(newArr); // O(2)
```

### O(n^2) - Quadratic Time

This is the start of the worst algorithms as the time it takes exponentially increases by powers of 2 based on the input. For example an array with a length of 2 would have 4 operations. An length of 3 would have 9 operations. (Nested Loops)

```js
const boxes = [1,2,3,4,5];

for (let i = 0; i < boxes.length) {
  for (let j = 0; < boxes.length; j++) {
    console.log(i, j);
  }
}
```

### Simplyfying Big O

```js
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)
```

With Big O we simplyfy the calculation to give more of a generalization about the efficiency of the program/function.

### 4 Rules

1. Worst Case
2. Remove Constants
3. Different Terms For Input
4. Drop Non Dominants

### Worst Case

- We always use the worst case calculations Ex.) In a loop that is searching we **_MAY_** have to go unti lthe very end at worst case no matter what so it is O(n). It doesn't matter that sometimes we may find what we need earlier in the loop before the end

### Remove Constants

- Big O = 4 + 7n = O(n) We remove all the numbers

### Remove Terms For Inputs

- If you have multiple inputs Ex.) 2 inputs and a loop to loop over each input. The time it would take for each loop would depend on its corresponding input. So you would end up with O(a + b). If you have nested loops over different inputs its not quadractic time but rather 0(a \* b);

### Drop Non Dominants

- If we have a function that has only one input with a loop over the inputs and then a separate nested loop so we have a loop that is O(n) and one that is O(n^2). The Big O would be O(n^2) because the Big O of the first loop doesn't really matter because we want worst case and drop the non dominant terms.

### Big O Cheat Sheet: -Big Os-

- O(1) Constant no loops
- O(log N) Logarithmic usually searching algorithms have log n if they are sorted (Binary Search)
- O(n)Linear for loops, while loops through n items
- O(n log(n)) Log Linear usually sorting operations
- O(n^2) Quadratic every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential recursive algorithms that solves a problem of size N
- O(n!) Factorial you are adding a loop for every element
- Iterating through half a collection is still O(n) Two separate collections: O(a \* b)

What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

Rule Book

1. Always worst Case
2. Remove Constants
3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)

   - for steps in order
   - for nested steps

4. Drop Non-dominant terms

What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations

Big O can relate to time complexity **OR** space complexity.

Space complexity of O(n) as it's taking up O(n) memory with adding to the array.

```js
function test(n) {
  const hiArr = [];
  for (let j = 0; j < boxes.length; j++) {
    hiArr.push("hi");
  }
  return hiArr;
}
```

Premature optimization is the root of all evil. We need to pay attention if we need to optimize for runtime, or space and even readability and balance with judgment between them all.

## Solving Interview Problems

### What Companies Look For

- Analytic Skills
- Coding Skills
- Technical Skill
- Communication Skills

#### How To Interview

1. When the interviewer says the question, write down the key points at the top (i.e. sorted
   array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory,
   etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that
   you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things.
   Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
   the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
   that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to
   follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces
   and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand
    what you need to code, the better the whiteboard will go. So never start a whiteboard
    interview not being sure of how things are going to work out. That is a recipe for disaster.
    Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
    So think: What can I show in order to show that I can do this and I am better than other
    coders. Break things up in Functions (if you can’t remember a method, just make up a function
    and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the
    input. Assume people are trying to break your code and that Darth Vader is using your
    function. How will you safeguard it? Always check for false inputs that you don’t want. Here is
    a trick: Comment in the code, the checks that you want to do… write the function, then tell the
    interviewer that you would write tests now to make your function fail (but you won't need to
    actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask
    the interviewer if we can make assumption about the code. Can you make the answer return
    an error? Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there
    different approaches? Is it readable? What would you google to improve? How can
    performance be improved? Possibly: Ask the interviewer what was the most interesting
    solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also
    common that the interviewer asks you extension questions, such as how you would handle the
    problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
    This is a common follow-up question at Google, where they care a lot about scale. The answer
    is usually a divide-and-conquer approach — perform distributed processing of the data and only
    read certain chunks of the input from disk into memory, write the output back to disk and
    combine them later.

```js
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

//O(a*b)
//O(1) - Space Complexity

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

//O(a + b) Time Complexity
//O(a) Space Complexity

// containsCommonItem2(array1, array2)

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem(array1, array2);
containsCommonItem2(array1, array2);
containsCommonItem3(array1, array2);
```

Being able to to ask questions and come up with an initial approach with steps explained is crucial. Interviewers aren't just looking for if you can solve the problem or if you have the correct answer off the start. They want you to be able to walk through your thought process at each step, even before you start typing. What questions will you ask before hand? Talk about the downsides to an initial approach. Is a second or first approach better in different use cases (Space vs Time vs Readability vs Time Constraints)?

## Data Structures

### Intro

Data Structures:

- Collections of Values
- Also have a concept of Readability, Memory and Speed
- Some come pre-built into languages ex.) Maps, Arrays

Algorithms:

- Steps take to manipulate data

Combined together these are used to write programs ad solve problems. We want to write proper data structures as to optimize for our computer to be able to run our programs.

How computers store data:

1. RAM

- To run code computers need to keep track of variables, numbers, string, object etc. This is stored in memory or RAM (Random Access Memory)
- Temporary (Disappears when computer is shut off)
- Fast
- Massive storage area with addresses
- Each address holds 8 bits (1s or 0s which correspond to a switch of on or off) which is called a byte
- Ex.) In a 32 bit system a given variable will take up 32 bits, or 4 bytes

2. Storage

- Store things like video, music or documents
- Disk, flash or solid state drives
- Persistant memory (Still there when the computer is turned back on)
- Slow

3. CPU

- What performs all the calculations inside the computer
- Needs access to RAM & Storage
- Connected to a memory controller which reads and writes to memory
- Has a small caches for recently accessed memory

We can perform different operations on different data structures. Different structures are faster at these different operations than others.

1. Insertion

- Add new item to a collection in a specific place

2. Deletion

- Remove new item to a collection in a specific place

3. Traversal

- Access an item exactly once and perform an operation (Go to)

4. Searching

- Find location if it exists in a collection

5. Sorting

- Arrange items of a collection in a specific order

6. Access

- How we access the data in the computer

### Arrays

#### Intro

- Organize items sequentially
- Stored in memory contiguously, each item one after the other

```js
const strings = ["a", "b", "c", "d"];

// Simplified version of looking at things
// 32 bit system
// 4 items
// 4 bytes each
// 4 * 4 = 16 bytes of storage

// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)
```

#### Static vs Dynamic Arrays

- Static array have fixed length
- Dynamic arrays expand as you add more elements

#### Implementing Arrays

```js
class Arr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// {
//   "length": 6,
//   "data": {
//       "0": "hi",
//       "1": "!!",
//       "2": "sure"
//       "3": "check"
//       "4": "yup"
//       "5": "yup"
//   }
// }

const testArr = new Arr();

testArr.push("hi");
testArr.push("everyone");
testArr.push("!!");
testArr.push("sure");
testArr.push("check");
testArr.push("yup");

testArr.delete(1);

// console.log(testArr.get(1));
// everyone

// const removedItem = testArr.pop();
// console.log(removedItem);
// yup

console.log(testArr);
```

Strings are just arrays of characters, so when manipulating them, especially in JS it is very helpful to turn them into array (turning many data types into array is helpful for the amount of methods available on arrays).

```js
// Reverse - my implementation
const str1 = "Hello my name is Cam Remesz";

const str2 = "!!gnikrow yletinifed si gniht siht puY";

function reverse(string) {
  const strArr = string.split("");
  const reversed = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversed.push(strArr[i]);
  }

  return reversed.join("");
}

const check1 = reverse(str1);
const check2 = reverse(str2);

console.log(check1);
// zsemeR maC si eman ym olleH
console.log(check2);
// Yup this thing is definitely working!!
```

Sorting Arrays

My attempt. I believe this is bubble sort.

```js
const arr1 = [12, 355, 26, 13];
const arr2 = [53, 27, 87, 45, 112];

const sorted1 = arr1.sort((a, b) => a - b);
const sorted2 = arr2.sort((a, b) => a - b);

const merged = [...sorted1, ...sorted2];

console.log(merged);

for (let i = 0; i <= merged.length + 1; i++) {
  if (merged[i] > merged[i + 1]) {
    const temp = merged[i];
    merged[i] = merged[i + 1];
    merged[i + 1] = temp;
  }
}

console.log(merged);
```

#### Review

So from what we've learned we can determine what Arrays might be good/bad for

Good:

- Lookup
- Push/Pop
- Ordered

Bad:

- Insert
- Delete
- Sometimes a fixed size (Static Arrays)

### Hash Tables

#### Basics

Hash tables are collections of key value pairs. They take the key and run it through a hash function to get a unique memory address for any given string.

#### Collisions

- insert - O(1)
- lookup - O(1) or O(n) if there is a collision
- delete - O(1)
- search - O(1)

Hash tables are very fast for operations but have a finite size with only so many memory addresses. At some point a collision will happen where the key being hashed is already the same as one currently in use. There are different methods of collision resolution but it is usually handled in the language itself. It is only important to be aware of this because it can affect time complexity. Ex.) One resolution method is a linked list as that memory location and that gives us O(n) lookup because it knows the address, but it is dependant on how many items are stored at that address and the iteration may need to go until the last one to get the desired key to retrieve.

#### Across Languages

Hash tables are implemented different in different languages and have different names.

Java - Map
Python - Dictionary
Javascript - Object

In JS we also have Maps & Sets. These are forms of hash tables. Maps preserve order, whereas objects don't and can also user any type as a key whereas objects can only use strings. Set store only values and not keys and also are unique and duplicates are removed.

```js
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArr.push(this.data[i][0][0]);
      }
    }
    return keyArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");

console.log(myHashTable);
console.log(myHashTable.keys());
```

#### Challenge - First Recurring Number

```js
// My solution
const arr1 = [2, 1, 3, 4, 8, 23, 2, 1, 24, 5, 4];
const arr2 = [23, 12, 42, 78, 54, 24, 43, 23, 5];
const arr3 = [1, 2, 3, 4, 5, 0, 6, 0, 8];

function firstDuplicateNumber(arr) {
  let repeatedNumber;
  if (!arr.length) {
    return repeatedNumber;
  } else {
    repeatedNumber = {};
  }
  for (let i = 0; i < arr.length; i++) {
    if (repeatedNumber[arr[i]] !== undefined) {
      return repeatedNumber[arr[i]];
    } else {
      repeatedNumber[arr[i]] = arr[i];
    }
  }
}

console.log(firstDuplicateNumber(arr1));
console.log(firstDuplicateNumber(arr2));
console.log(firstDuplicateNumber(arr3));
```

### Linked Lists

Linked lists are collections of nodes that contain a value and a pointer to the next node. The nodes are not stored contiguously like arrays in memory. Each node is at its own memory address. Pointers are a reference to another place is memory.

- prepend O(1)
- append O(1)
- lookup O(n)
- insert O(n)
- delete O(n)

```js
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
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, value) {
    let currentIndex = 0;
    let currentNode = this.head;
    const newNode = new Node(value);

    while (currentIndex !== index) {
      console.log(currentNode);
      currentNode = currentNode.next;
      currentIndex++;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
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
    this.length--;
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
console.log(linkedList.remove(1));
```

### Doubly Linked Lists

```js
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

    while (currentIndex !== index) {
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
```

#### Doubly VS Singly Linked Lists

Singly:

- Simple to implement
- Requires less memory
- A bit faster because less pointers to move around
- If we lose reference to the head the whole list can be lost
- Fast insertion/deletion

Doubly:

- Can traverse backwards
- Requires more memory
- More work to implement
- Great for searching

Linked List Review:

Good

- Fast insertion
- Fast deletion
- Ordered
- Flexible size

Bad

- Slow lookup
- More memory

### Stacks

LIFO - Last in first out

- lookup O(n)
- pop O(1)
- push O(1)
- peek O(1)

```js
class StackArray {
  constructor() {
    this.length = 0;
    this.stack = {};
  }

  peek() {
    return console.log(this.stack[0]);
  }

  push(value) {
    // This is unshift for an array. In the course they ended up just using the built in array methods
    // I guess I went too far and just built unshift

    let currentIndex = 0;
    let currentItem;
    let temp;

    while (this.length > currentIndex) {
      currentItem = this.stack[currentIndex];

      if (temp) {
        const next = this.stack[currentIndex + 1];
        this.stack[currentIndex + 1] = temp;
        temp = next;
      } else {
        temp = this.stack[currentIndex + 1];
        this.stack[currentIndex + 1] = currentItem;
      }

      currentIndex++;
    }

    this.stack[0] = value;
    this.length++;
    console.log(this.stack);
  }

  pop() {
    const item = this.st ack[0];
    for (let i = 0; i <  this.length - 1; i++) {
      this.stack[i] = this.stack[i + 1];
    }
    delete this.stack[this.length - 1];
    this.length--;
    console.log(this.stack);
    return item;
  }


}

const stackArr = new StackArray();

stackArr.push(5);
stackArr.push(33);
stackArr.push(666);
const sure = stackArr.pop();

console.log(sure)
```

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class StackLinkedList {
  constructor() {
    this.length = 0;
  }

  peek() {
    if (!this.length) return undefined;
    return console.log(this.head);
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = this.tail = newNode;
      return this.length++;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  printStack() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }

  pop() {
    if (!this.length) return undefined;
    const target = this.head;
    this.head.prev = null;
    this.head = this.head.next;
    this.length--;
    return console.log(target);
  }
}

const stacky = new StackLinkedList();
stacky.push(5);
stacky.push(666);
stacky.pop();
stacky.pop();
stacky.printStack();
```

### Queues

FIFO - First in last out

- lookup O(n)
- enqueue O(1)
- dequeue O(1)
- peek O(1)

```js
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
    this.tail = newNode;
    this.length++;
    this.printQueue();
  }

  dequeue() {
    if (!this.length) return undefined;
    const frontOfQueue = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
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
console.log(twelve);
```

### Trees

Trees have a hierarchical structure with nodes

- Root (Only entry point)
- Parent
- Child
- Siblings
- Leaves (last item in a branch)
- Sub-trees (Sections of smaller trees withing the larger tree)
- Nodes can only reference children

#### Binary Tree

- Each node can only have 0, 1 or 2 nodes
- Each child can only have 1 parent

Some terminology:

Perfect Binary Tree
- All nodes have 2 children
- Nodes never have just 1 child
- Number of total nodes on each level doubles as you move down the tree
- The sum of the nodes on the very last level is equal to the sum of all the other nodes + 1 (This means that half of the nodes are above the last level and we can make more efficient decisions based on this)

Full Binary Tree (sometimes referred to as a proper, plane, or strict binary tree)
- Just a binary tree with any nodes having 0,1 or 2 nodes

#### O(log n)

We can calculate how many nodes a PERFECT binary tree has as we know each level doubles the amount of nodes from the previous level.

Level 0: 2^0 = 1
Level 1: 2^1 = 2
Level 2: 2^2 = 4
Level 3: 2^3 = 8
Level 4: 2^4 = 16

Based on this we can find out the number of nodes in a tree by doing 2^h - 1. h being height.

log of nodes = height
Ex.) log of 100 = 2 because 10^2 = 100

O(log n) is better than O(n) because you dont need to go through every item/node. It is like searching through a phone book. You split it open and discard the half you don't need and search the other half.

#### Binary Search Tree (BST)

lookup (O log n)
insert (O log n)
delete (O log n)

Rules: 
- All child nodes to the right of the root node must be greater than the current ndoe
- Node can only have up to 2 children

Good
- Lookup
- Better than O(n)
- Ordered
- Flexible Size (Essentially a type of linked list)

Bad
- No O(1) Operations


#### Balanced vs Unbalanced Binary Search Trees

If nodes are added that are sequential, then we just end up with a linked list with no real other branches and then we're just looping through every single node.

This is why unbalanced trees are bad for performance. Because they become O(n).

There are algorithms to balance unbalanced trees but they are fairly advanced and time consuming. Its more important to know why you would need to or be able to talk about it.

Summary: They can be great in their given use cases as long as you keep them balanced


#### Exercise - Code a BST without being told how

<!-- Couldn't do it. I had misconceptions about how BSTs work. I thought they were ordered, but this isn't true. See the commented tree below.  -->

```js
class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BstNode(value);
    if (!this.root) {
      this.root = newNode;
      console.log(this.root);
      return;
    } 
    let currentNode = this.root;

    while (true) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          console.log(this.root);
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          console.log(this.root);
          break;
        }
        currentNode = currentNode.right;
      }
    }

  }

  lookup(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        console.log(currentNode);
        return currentNode;
      }
    }
    return undefined
  }

  remove(value) {
    // I didn't code this

    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(50);
bst.insert(55);
bst.insert(25);
bst.insert(13);
bst.insert(3);
bst.insert(4);
bst.insert(2);

//          5
//       3     50
//     2  4   25 55
//           13

bst.lookup(13)
bst.lookup(50)
```

#### AVL Trees & Red/Black Trees

- These are more likely used in production as these will auto-balance themselves and prevent linked lists

#### Binary Heaps

MEMORY HEAPS !== HEAP DATA STRUCTURES

There are max heaps and min heaps where the root node is either the highest or lowest value accordingly. Subsequent nodes follow the same ordering. Ex.) Min heaps each child node increases in value (Max heaps decrease)

- No meaning between left and right as long as they are less or more than the root value (Min/Max Heap)
- Left to right insertion (Insertion always starts at left and goes to right regardless of value, then bubbling occurs - see next point)
- Once inserted if value is greater/less the inserted value will bubble up to adhere to the type of heap
- lookup O(n)
- insert O(log n)
- delete O(log n)
- Great for comparative operations
- Priority (Are priority queues)

#### Tries

They are trees especially used for string sequences. The root node is blank and all child nodes includes possible sequences. They are like autocomplete. Ex.) The letter "a" might have the letter "n" and "p" attached causing 2 branches that could result in "a-nswer" of "a-pple". Also known as prefix trees

- Time complexity of O(length of word)

### Graphs

- Set of values related in a pairwise fashion
- Each item is a node (or vertex)
- Nodes are connected with EDGES
- Great for modelling real world relationships

#### Types Of Graphs

1. Directed
- One Way
2. Undirected
- Traversal in any direction
3. Weighted
- Edges can also hold information
4. Unweighted
- Edges don't hold information
5. Cyclic
- Vertices connected in a circular fashion
6. Acyclic
- No closed connection

#### Graphing Data

3 Ways to think of building a graph:
1. Edge List
- List the different connections
- Weighted edge list would list each connection in a hashtable and each connection as an index. Ex.) node 5 connects to node 1 and 2. Index 0 would be `[5, 1, 99]` with `99` being the edge. Index 1 would be `[5, 2, 50]`

```js
const edgeListGraph = [[0, 2], [2, 1], [2, 3], [1,3]];
```

2. Adjacent List
- Index is the node
- Value is the nodes neighbours
- Weighted graph would hold the value as 2 values to include the neighbor node and the edge 
```js
const adjacentListGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

const weighted = [[[2, 6]], [[2, 15],[3, 25]], [[0, 6],[1, 15],[3, 50]], [[1, 25], [2, 50]]];
```

3. Adjacent Matrix
- Index is the node (holdas an array of connections)
- Node array displays a connection to its neighbours by its indexes
- 0s and 1s indicating if node X has a connection to node Y
- Can also represent with objects with node index as the key
- Weighted graphs would use whatever data required as edges in place of 0s and 1s as below
```js
const adjacentListGraph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
];
```


**Adjacent Graph - My Solution**

```js
class AdjacentGraph {
  constructor() {
    this.numNodes = 0;
    this.adjacentList = {}
  }

  /**
   * 
   * @param {number} node 
   */
  addVertex(node) {
    if (this.adjacentList[node]) return;

    this.adjacentList[node] = [];
    this.numNodes++;
    this.showConnections(); 
  }

  /**
   * 
   * @param {number} node1 
   * @param {number} node2 
   */
  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;

    if (this.adjacentList[node1].includes(node2)) return;

    this.adjacentList[node1] = [...this.adjacentList[node1], node2].sort((a, b) => a > b);

    this.adjacentList[node2] = [...this.adjacentList[node2], node1].sort((a, b) => a > b);

    this.showConnections();
  }

  showConnections() {
    console.log(this.adjacentList);
  }
}

const adjacentGraph = new AdjacentGraph();


adjacentGraph.addVertex(5);
adjacentGraph.addVertex(20);
adjacentGraph.addVertex(66);
adjacentGraph.addVertex(32);
adjacentGraph.addVertex(78);

adjacentGraph.addEdge(5, 20);
adjacentGraph.addEdge(20, 66);
adjacentGraph.addEdge(66, 32);
adjacentGraph.addEdge(32, 78);
adjacentGraph.addEdge(78, 20);
```

Pros
- Great for relationships

Cons
- Hard to scale