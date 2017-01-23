function Division(num1,num2) {
  var high = Math.max(num1, num2);
  var low = Math.min(num1, num2);
  var greatestFactor = 1;
  for (var i = 2; i < high; i++) {
    if (high % i === 0 && low % i === 0) {
      greatestFactor = i;
    }
  }

  return greatestFactor;
}

console.log(Division(8,2));
