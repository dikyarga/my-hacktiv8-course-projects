function Palindrome(str) {
  var trimedStr = str.replace(/\s/g, '');
  if (trimedStr == trimedStr.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
  // code goes here
  return str;

}
console.log(Palindrome('eye'));
