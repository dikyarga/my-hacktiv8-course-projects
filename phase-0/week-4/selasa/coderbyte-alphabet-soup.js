function AlphabetSoup(str) {
  var arr = str.split('');
  var sorted = arr.sort();
  var joined = sorted.join('');
  return joined;
}

console.log(AlphabetSoup('hello'));
