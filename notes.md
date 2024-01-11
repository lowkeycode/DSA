# ZTM - DSA

# Big O

## Intro

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


## O(n) - Linear Time

One calculation per each element looped over. Or linear time. So if there is only on element in an array, or if there are 100,000 items in an array. A function with a for loop that performs one calculation per element will have the same Big O notation of O(n) regardless of the size of the array

## O(1) - Constant Time

How ever many operations occurs we increase the number in brackets. With Big O we tend to ignore the nitty gritty details and round. So a function like below, even with a large input of 10000, will only perform 2 calculations and always have a Big O of O(2). We still just round down to O(1). Constant time is one of the most predictable, because no matter how many elements we have the same number of operations is performed. Therefore it is one of the most efficient of the Big O notations.

```js
const newArr = Array(10000).fill({}); 

function constantTime(arr) {
  console.log(arr[0]); // O(1)
  console.log(arr[1]); // O(1)
}

constantTime(newArr); // O(2)
```

## O(n^2) - Quadratic Time

This is the start of the worst algorithms as the time it takes exponentially increases by powers of 2 based on the input. For example an array with a length of 2 would have 4 operations. An length of 3 would have 9 operations.

```js
const boxes = [1,2,3,4,5];

for (let i = 0; i < boxes.length) {
  for (let j = 0; < boxes.length; j++) {
    console.log(i, j);
  }
}
```


## Simplyfying Big O

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

## Remove Terms For Inputs
- If you have multiple inputs Ex.) 2 inputs and a loop to loop over each input. The time it would take for eacdh loop would depend on its corresponding input. So you would end up with O(a + b). If you have nested loops over different inputs its not quadractice time but rather 0(a * b);

## Drop Non Dominants
- If we have a function that has only one input with a loop over the inputs and then a separate nested loop so we have a loop that is O(n) and one that is O(n^2). The Big O would be O(n^2) because the Big O of the first loop doesn't really matter because we want worst case and drop the non dominant terms.


## Big O Cheat Sheet: -Big Os-
O(1) Constant
- no loops
O(log N) Logarithmic
- usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear
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
+ for steps in order
* for nested steps
4. Drop Non-dominant terms

What causes Space complexity?
- Variables
- Data Structures 
- Function Call 
- Allocations



