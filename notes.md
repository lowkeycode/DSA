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

O(1) Constant

- no loops
  O(log N) Logarithmic
- usually searching algorithms have log n if they are sorted (Binary Search) O(n)
  Linear
- for loops, while loops through n items
  O(n log(n)) Log Linear
- usually sorting operations
  O(n^2) Quadratic
- every element in a collection needs to be compared to ever other element. Two nested loops
  O(2^n) Exponential
- recursive algorithms that solves a problem of size N
  O(n!) Factorial
- you are adding a loop for every element
  Iterating through half a collection is still O(n) Two separate collections: O(a \* b)

What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

Rule Book

1. Always worst Case
2. Remove Constants
3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)

- - for steps in order
- - for nested steps

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

- To run code computers need to keep track of variables, numbers, string, object etc. This is stored in memory orRAM (Random Access Memory)
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
//   "length": 3,
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

### Doubly VS Singly Linked Lists

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
