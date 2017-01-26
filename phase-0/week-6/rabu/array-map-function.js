let arr = [1, 2, 3, 4, 5, 6];
let duaKaliLipat  = arr.map(function(isiArray) {
  return isiArray * 2;
});

console.log(duaKaliLipat); // [2, 4, 6, 8, 10, 12]

let arra = ['bundar', 'kotak', 'segitiga'];
let newArr = arra.map(function(isiArray) {
  return 'Topi saya ' + isiArray;
});

console.log(newArr); // ['Topi saya bundar', 'Topi saya kotak', 'Topi saya segitiga']

// dengan Arrow function

let ar = ['bundar', 'kotak', 'segitiga'];
let newAr = ar.map( isiArray => {
  return 'Topi saya ' + isiArray;
});

console.log(newAr); // ['Topi saya bundar', 'Topi saya kotak', 'Topi saya segitiga']
