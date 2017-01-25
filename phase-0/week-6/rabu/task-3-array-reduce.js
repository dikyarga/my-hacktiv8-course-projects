var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  return arr.reduce(function(currentMax, currentNumber){
      return currentNumber > currentMax ? currentNumber : currentMax;
  }, 0);
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
