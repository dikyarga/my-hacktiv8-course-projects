function arrangePairs(studentArr){
  var answer = [];
  for (var i = 0; i < studentArr.length; i+=2) {
    if (studentArr[i+1] == undefined) {
      answer.push(studentArr[i] + ' dan Instruksur');
    } else {
      answer.push(studentArr[i] + ' dan ' + studentArr[i+1]);
    }
  }
  return answer;
  console.log(answer);
}

console.log(arrangePairs(['Diky', 'Bambang', 'Handoko']));
console.log(arrangePairs(['Adhy', 'Akbar', 'Haidar', 'Juvenita']));
console.log(arrangePairs(['Adhy']));
console.log(arrangePairs([]));
