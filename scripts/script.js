const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {

      // Track by index otherwise we wont know where to swap from
      let min = i;
      // But well also need the value
      let temp = array[i];

      for(let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }

      // Swap the lowest value to the next sorted position at beginning or array
      array[i] = array[min];
      array[min] = temp;
    }
}

selectionSort(numbers);

console.log(numbers);
