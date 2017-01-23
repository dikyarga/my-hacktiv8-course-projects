function ABCheck(str) {
  var regex = /a...b/;
  return regex.test(str)
  // console.log(regex.test(str));
  // var found = str.search(/a...b/);
  // // console.log(found);
  // if (found > -1) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(ABCheck('Laura sodadabs'));
