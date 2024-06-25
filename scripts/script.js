/**
 * 
 * @param {number} number 
 */
function factorial(number) {
  if(number === 2) return 2;
  return number * factorial(number - 1);
}

const check = factorial(5);

console.log(check);