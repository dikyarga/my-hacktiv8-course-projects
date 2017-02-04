function foxEars(foxs){
  if(foxs == 0) {
    return 0;
  } else {

    return 2 + foxEars(foxs - 1);

  }
}

console.log(foxEars(3));
console.log(foxEars(4));
console.log(foxEars(6));
console.log(foxEars(0));
