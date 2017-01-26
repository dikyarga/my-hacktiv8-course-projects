let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let habisDibagiTiga = arr.filter(function(isiArray) {
  if(isiArray % 2 === 0) {
    return true; // Jika true, isi array tidak akan disaring keluar
  }
  else {
    return false; // Jika true, isi array akan disaring keluar
  }
});

console.log(habisDibagiTiga); // [3, 6, 9]

// Simple Version
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let habisDibagiTiga = arr.filter(function(isiArray) {
  return isiArray % 3 === 0; // akan mengembalikan nilai true atau false
});

console.log(habisDibagiTiga); // [3, 6, 9]
*/

// Using Arrow Function

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let habisDibagiTiga = arr.filter( isiArray => {
  return isiArray % 3 === 0; // akan mengembalikan nilai true atau false
});

console.log(habisDibagiTiga); // [3, 6, 9]

*/
