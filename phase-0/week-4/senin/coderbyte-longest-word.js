function LongestWord(sen) {
  var arr = sen.match(/[a-z]+/gi);
  var max = 0;
  var indexArrMax = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      indexArrMax = i;
    }
  }
  return arr[indexArrMax];
}

console.log(LongestWord('aku!! sayang kamu'));
