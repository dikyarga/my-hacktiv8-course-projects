function TimeConvert(num) {

  // code goes here
  var hours = Math.floor(num / 60);
  var minutes = num % 60;

  return hours + ':' + minutes;

}
console.log(TimeConvert(4));
