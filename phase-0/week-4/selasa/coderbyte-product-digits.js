function ProductDigits(num) {
  var low=num.toString().length + 1;
  // console.log(Math.sqrt(24));
  for (var i = 0; i < Math.ceil(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      var number2 = (num / i).toString().length;
      var number1 = i.toString().length;
      if (number1 + number2 < low) {
        low = number1 + number2;
      }
    }
  }
  return low;
}

console.log(ProductDigits(24));
