function LetterChanges(str) {
  // var arr = str.split('');
  var newStringArr = [];

  var converted = str.replace(/[a-z]/gi, function(char){
    if (char == 'z' || char == 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  var caps = converted.replace(/a|i|u|e|o/gi, function(vokal){
    return vokal.toUpperCase();
  })
  // for (var i = 0; i < str.length; i++) {
  //   var n = str.charCodeAt(i) + 1;
  //   var char = String.fromCharCode(n);
  //   var regex = /a|i|u|e|o/;
  //   if (regex.test(char)) {
  //
  //   }
  // }
  // code goes here
  // return newStringArr.join('');
  return caps;

}

console.log(LetterChanges('fun times!'));
