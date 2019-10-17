function foxEars(foxs){
  return (foxs == 0) ? 0 : foxEars(foxs - 1) + 2
}
  
  console.log(foxEars(3));
  console.log(foxEars(4));
  console.log(foxEars(6));
  console.log(foxEars(0));
