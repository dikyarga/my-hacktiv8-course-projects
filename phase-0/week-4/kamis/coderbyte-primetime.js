function PrimeTime(num) {
  if (num < 2) {
    return false;
  }
  var q = Math.floor(Math.sqrt(num));
  for (var i = 2; i < q; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(PrimeTime(100));
