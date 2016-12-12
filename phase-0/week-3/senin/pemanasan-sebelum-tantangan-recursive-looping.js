// Looping sederhana mengalikan dengan angka sebelumnya, hingga angkat terkecil 1
// Sample
// Input totalSum(5)
// Output 5 * 4 * 3 * 2 * 1 = 120

function totalSum (number) {
  // Buat varibel sementara / temporary
  // Assign dengan nilai 1, supaya tida menjadi NaN
  var total = 1;
  // Lakukan perulang sebanyak jumlah angka
  for (var i = number; i >= 1; i--) {
    // Kalikan dan simpan hasilnya ke variabel total
    total *= i;
  }
  // Kembali kan hasilnya dengan melempar variabel total
  return total;
}

console.log(totalSum(5));

// Looping dengan mengalikan dengan angka sebelumnya dengan selisih paramater kedua
// Sample
// Input : totalLompat(12, 5)
// Output : 12 * 7 * 2 = 168

function totalLompat  (number, dif) {
  // Buat varibel sementara / temporary
  // Assign dengan nilai 1, supaya tida menjadi NaN
  var total = 1;
  // Lakukan perulang sebanyak jumlah angka dengan selisih sebanyak dif
  for (var i = number; i >= 1; i -= dif) {
    // Kalikan dan simpan hasilnya ke variabel total
    total *= i;
  }
  // Kembali kan hasilnya dengan melempar variabel total
  return total;
}
console.log(totalLompat(12, 5));
