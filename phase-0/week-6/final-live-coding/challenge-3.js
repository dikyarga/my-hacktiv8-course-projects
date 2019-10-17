function arrangePairs(studentArr){
    var answer = [];
    if(studentArr.length % 2 != 0){studentArr.push("Instruktur")}
    while(studentArr.length != 0){answer.push(studentArr[0] + " dan " + studentArr[1]); studentArr.splice(0,2)}
    return answer;
  }
  
  console.log(arrangePairs(['Diky', 'Bambang', 'Handoko']));
  console.log(arrangePairs(['Adhy', 'Akbar', 'Haidar', 'Juvenita']));
  console.log(arrangePairs(['Adhy']));
  console.log(arrangePairs([]));
  
