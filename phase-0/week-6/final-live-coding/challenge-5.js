function nextTargetArea(str){
  var two = /^.*T.*W.*O.*/g;
  var three = /^.*T.*H.*R.*E.*E.*/g;
  var four = /F|O|U|R/g;
  var six = /S|I|X/g;
  var seven = /S|E|V|E|N/g;
  var eight = /E|I|G|H|T/g;
  var total = 0;
  // (two.test(str)) ? total += 2 : total += 0;
  // (three.test(str)) ? total += 2 : total += 0;
  // (four.test(str)) ? total += 2 : total += 0;
  if (two.test(str)) {
    total += 2;
  }
  if (three.test(str)) {
    total += 3;
  }
  // console.log(two.test(str));
  return total;
}

console.log(nextTargetArea('WTWTHROETEO'));
console.log(nextTargetArea('WTO'));
