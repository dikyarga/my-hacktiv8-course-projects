/*
HACKTIV8 Online Live Coding 3

============
HACKING FOX
============

[DESKRIPSI]

Seekor Rubah Bernama Hack sedang berusaha mengajak teman-teman calon developer
full-stack JavaScript untuk pemanasan. Ia memberikan tantangan sederhana untuk
pemanasan awal.

[INSTRUKSI]

Tersedia sebuah function hackFox yang mengandung satu parameter berupa angka.
1. Jika angka tidak habis dibagi 2 atau 3, maka function akan
me-return "SALAH".
2. Jika angka habis dibagi 2, maka return "HACK"
3. Jika angka habis dibagi 3, maka return "FOX"
4. Jika angka habis dibagi 2 dan 3, maka return "HACKFOX"

*/

function hackFox(num) {
  // CODING DISINI!
  if (num % 2 == 0 && num % 3 ==0) {
    return "HACKFOX";
  } else if (num % 2 == 0) {
    return "HACK";
  } else if (num % 3 == 0) {
    return "FOX";
  } else {
    return "SALAH";
  }
}

// bagian ini tidak boleh diubah
console.log(hackFox(5)); // "SALAH"
console.log(hackFox(2)); // "HACK"
console.log(hackFox(8)); // "HACK"
console.log(hackFox(9)); // "FOX"
console.log(hackFox(9)); // "FOX"
console.log(hackFox(12)); // "HACKFOX"
console.log(hackFox(18)); // "HACKFOX"
console.log(hackFox(131)); // "SALAH"
// bagian ini tidak boleh diubah
