function LargestPair(num) {
  var value = 0;
  var convert = String(num);
  if (convert.length === 1 || convert.length === 2) {
    return num;
  } else {
    for (var i = 0; i < convert.length; i++) {
      var temp = convert[i] + convert[i+1];
      if (parseInt(temp) > value) {
        value = temp;
      }
    }
    return value;
  }
}

console.log(LargestPair(898989));
