function SimpleMode(arr) {
  var nMap = {};
  var greatestFreq = 0;
  var mode;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
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
    console.log(res["count"]);
  }
  if (res["count"] == 1) {
    return -1;
  } else {
    return res["num"];
  }
}

console.log(SimpleMode([5,5,2,2,1]));
