function PowersofTwo(num) {
  var result = 0;
  var counter = 1;

  while (result < num) {
    result = Math.pow(2, counter);
    counter++;
  }

  return (result === num) ? true : false;
}

console.log(PowersofTwo(22));
