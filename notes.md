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
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
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
- We always use the worst case calculations Ex.) In a loop that is searching we ***MAY*** have to go unti lthe very end at worst case no matter what so it is O(n). It doesn't matter that sometimes we may find what we need earlier in the loop before the end

### Remove Constants
- Big O = 4 + 7n = O(n) We remove all the numbers

### Remove Terms For Inputs
- If you have multiple inputs Ex.) 2 inputs and a loop to loop over each input. The time it would take for each loop would depend on its corresponding input. So you would end up with O(a + b). If you have nested loops over different inputs its not quadractic time but rather 0(a * b);

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
Iterating through half a collection is still O(n) Two separate collections: O(a * b)

What can cause time in a function? 
- Operations (+, -, *, /) 
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

Rule Book
1. Always worst Case
2. Remove Constants
3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
 - + for steps in order
 - * for nested steps
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

1. Analytic Skills
2. Coding Skills
3. Technical Skill
4. Communication Skills


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
    for (let i=0; i < arr1.length; i++) {
      for ( let j=0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          return true;
        }
      }
    }
    return false
  }
  
  //O(a*b)
  //O(1) - Space Complexity
  
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'a'];
  
  function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 params?
  
    let map = {};
    for (let i=0; i < arr1.length; i++) {
      if(!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
      }
    }
    // loop through second array and check if item in second array exists on created object. 
    for (let j=0; j < arr2.length; j++) {
      if (map[arr2[j]]) {
        return true;
      }
    }
    return false
  }
  
  //O(a + b) Time Complexity
  //O(a) Space Complexity
  
  // containsCommonItem2(array1, array2)
  
  function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  }
  
  containsCommonItem(array1, array2)
  containsCommonItem2(array1, array2)
  containsCommonItem3(array1, array2)
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
const strings = ['a', 'b', 'c', 'd'];

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