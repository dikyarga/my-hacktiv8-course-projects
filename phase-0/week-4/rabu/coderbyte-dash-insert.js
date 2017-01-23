function DashInsert(str) {
  var arr = str.split('');
  var newArrString = [];

  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) % 2 === 1 && parseInt(arr[i+1]) % 2 === 1) {
      // odd
      newArrString.push(arr[i]);
      newArrString.push('-');
    } else {
      newArrString.push(arr[i]);
    }
  }
  return newArrString.join('');
}

console.log(DashInsert('56730'));
