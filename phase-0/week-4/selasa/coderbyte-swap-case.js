function SwapCase(str) {
  var newArrString = [];
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/)) {
      newArrString.push(arr[i].toUpperCase())
    } else {
      newArrString.push(arr[i].toLowerCase())
    }
  }
  return newArrString.join('');
}

console.log(SwapCase('Hello World'));
