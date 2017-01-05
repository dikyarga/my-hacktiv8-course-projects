function ExOh(str) {
  var res = str.toLowerCase();
  // code goes here
  var splitString = res.split("");
  var x = 0;
  var o = 0;
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] === 'o') {
      o++;
    } else if (splitString[i] === 'x') {
      x++;
    }
  }

  if(x == o){
    return true;
  } else {
    return false;
  }
}

console.log(ExOh("xooxxooo"));
