// Bentuk penulisan : arr.reduce(callback,initialValue)

var numbersArr1 = [3, 5, 1];
var sumFromArr1 = numbersArr1.reduce(function(currentSum, currentNumber) {
  return currentSum + currentNumber;
}, 0);
console.log(sumFromArr1); // 9

var numbersArr2 = [];
var sumFromArr2 = numbersArr2.reduce(function(currentSum, currentNumber) {
  return currentSum + currentNumber;
}, 0);
console.log(sumFromArr2); // 0, diambil dari parameter kedua (initialValue yang tidak ditambah)

// Using Arrow function
/*
var numbersArr1 = [3, 5, 1];
var sumFromArr1 = numbersArr1.reduce((currentSum, currentNumber) => {
  return currentSum + currentNumber;
}, 0);
console.log(sumFromArr1); // 9
*/
