function ABCheck(str) {
  var found = str.search(/a...b/);
  // console.log(found);
  if (found > -1) {
    return true;
  } else {
    return false;
  }
}

console.log(ABCheck('Laura sobs'));
