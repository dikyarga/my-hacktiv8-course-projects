/*
HACKTIV8 Online Live Coding 4

======================
Gambler's Slot Machine
======================

[DESKRIPSI]

Seorang pejudi melakukan pemutaran Slot Machine. Slot machine adalah sebuah
permainan judi kasino yang akan menghasilkan tiga angka (range angka hanya 1-9).

Rules:
1. Apabila ia mendapatkan 3 angka dengan nilai yang berbeda, ia kalah.
    Contoh:
    a. hasil Slot Machine adalah 1, 2, dan 3. Ia kalah.
2. Apabila ia mendapat 2 angka yang sama, ia akan mendapat cash sebesar total dari
setiap angka dikalikan dengan 100.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 2.
        Ia akan mendapat cash sebesar (1 + 1 + 2) * 100 = 400
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapat cash sebesar (3 + 5 + 3) * 100 = 1100
3. Apabila ia mendapat 3 angka yang sama, ia akan mendapat cash sebesar total angka
tersebut dikalikan dengan 200.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 1.
        Ia akan mendapat cash sebesar (1 + 1 + 1) * 200 = 600
    b.  hasil Slot Machine adalah 3, 3, dan 3.
        Ia akan mendapat cash sebesar (3 + 3 + 3) * 200 = 1800

[INSTRUKSI]

Tersedia sebuah function bernama evaluateSlotMachine yang menampung satu parameter,
berupa array yang berisikan tiga nilai hasil keluaran dari slot machine.

Buatlah sebuah function yang akan mengembalikan string berupa
"YOU WIN X DOLLARS" apabila tidak kalah, dimana X merupakan cash yang dimenangkan pejudi,
atau "YOU LOSE" apabila kalah (mendapatkan tiga angka berbeda dari slot machine).
*/

function evaluateSlotMachine(diceResultArr) {
  // CODING DISINI!
  var nMap = {};
  var greatestFreq = 0;
  var mode;

  for (var i = 0; i < diceResultArr.length; i++) {
    var num = diceResultArr[i];
    // Kalau masih belum ada yang pernah masuk
    if (nMap[num] === undefined) {
      nMap[num] = 1;
    } else {
      nMap[num] += 1;
    }

  }
  // buat map baru untuk mengurutkan yang tertinggi
  var res = {num: null, count:0};
  // loop isi nMap
  for (var j in nMap) {
    // kalo lebih tinggi aja masukin
    if (nMap[j] > res["count"]) {
      res["count"] = nMap[j];
      res["num"] = j;
    }
  }
  var x = 0;
  if(res["count"] == 3){
    x = (diceResultArr[0] + diceResultArr[1] + diceResultArr[2]) * 200 ;
  } else if (res["count"] == 2) {
    x = (diceResultArr[0] + diceResultArr[1] + diceResultArr[2]) * 100 ;
  }
  return (res["count"] > 1) ? 'YOU WIN '+ x +' DOLLARS' : 'YOU LOSE';
}

// bagian ini tidak boleh diubah
console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE"
// // bagian ini tidak boleh diubah
