function OtherProducts(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    var temp = 1;
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        temp *= arr[j];
      }
    }
    str += temp;
    if (i !== arr.length - 1) {
      str += '-';
    }
  }
  // code goes here
  return str;
}
console.log(OtherProducts([1,2,3,100]));
