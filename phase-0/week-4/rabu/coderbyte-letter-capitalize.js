function LetterCapitalize(str) {
// note \w cari kata dalam kalimat
  return str.replace(/\w\S*/g,
    function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

console.log(LetterCapitalize('hello world'));
