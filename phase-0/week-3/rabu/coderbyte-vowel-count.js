function VowelCount(str) {
  var res = str.toLowerCase();
  var splitString = res.split("");
  var vowel = 0;
  for (var i = 0; i < splitString.length; i++) {
    switch (splitString[i]) {
    case 'a':
        vowel++;
        break;
    case 'i':
        vowel++;
        break;
    case 'u':
        vowel++;
        break;
    case 'e':
        vowel++;
        break;
    case 'o':
        vowel++;
        break;
      }
  }

  // code goes here
  return vowel;

}
console.log(VowelCount("Laliluada"));
