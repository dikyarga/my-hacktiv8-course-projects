function SimpleSymbols(str) {
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/i)) {
      if ((arr[i-1] == '+' && arr[i+1] == '+') || (arr[i-1] == '=' && arr[i+1] == '=')) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(SimpleSymbols('f++d+'));
