function ABCheck(str) {
  var removeSpace = str.replace(/\s/g, '');
  var arr = removeSpace.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'a' && arr[i+3] == 'b') {
      return true;
    }
  }
  return false;
}

console.log(ABCheck('after badly'));
