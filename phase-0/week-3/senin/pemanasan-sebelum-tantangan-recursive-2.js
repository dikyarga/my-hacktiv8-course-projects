
// Rekrusif sederhana mengalikan dengan angka sebelumnya, hingga angkat terkecil 1
// Sample
// Input totalSum(5)
// Output 5 * 4 * 3 * 2 * 1 = 120
function totalSum (number) {
  // Cek apakah ini angka terakhir / terkecil yang ingin ikut dihitung
  if (number == 1) {
    // Jika kembalikan nilainya
    return 1;
  } else {
    // Jika tidak, maka terus lakukan rekrusif dengan memanggil fungsinya sendiri
    return number * totalSum(number - 1);
  }
}

console.log(totalSum(5));

// Rekrusif dengan mengalikan dengan angka sebelumnya dengan selisih paramater kedua
// Sample
// Input : totalLompat(12, 5)
// Output : 12 * 7 * 2 = 168
function totalLompat (number, dif) {
  // Cek apakah ini angka terakhir / terkecil yang ingin ikut dihitung
  if (number == 1) {
    // Jika kembalikan nilainya
    return 1;
  // Cek kembali, apakah 'number' lebih besar dari dif (pembeda / selisih ke angka selanjutnya)
  } else if (number > dif) {
    // Jika iya, maka terus lakukan rekrusif dengan memanggil fungsinya sendiri
    return number * totalLompat(number - dif, dif);
  } else {
    // Jika tidak, maka balikan angka tersebut, agar menjadi nilai kemabalian pada proses rekrusif terakhir
    return number;
  }
}
console.log(totalLompat(12, 5));
