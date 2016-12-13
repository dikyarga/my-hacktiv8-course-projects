function CheckNums(num1,num2) {
  if (num2 > num1) {
    return true;
  } else if (num1 == num2) {
    return -1;
  } else {
    return false;
  }
  // code goes here
  return num1 + num2;

}

console.log(CheckNums(10,8));
