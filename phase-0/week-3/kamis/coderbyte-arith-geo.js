function ArithGeo(arr) {
  var isArithmetic = (arr[1] - arr[0] == arr[arr.length -1] - arr[arr.length -2]);
  var isGeometric = (arr[1] / arr[0] == arr[arr.length -1] / arr[arr.length -2]);
  if (!isArithmetic && !isGeometric) {
    return -1;
  } else {
    return (isArithmetic) ? 'Arithmetic':'Geometric';
  }
}
console.log(ArithGeo([2, 6, 10, 14]));
