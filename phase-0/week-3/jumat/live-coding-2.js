function isKillerTarget(civilianIDParam) {
  var param = civilianIDParam.split(',');

  function ambilInisial(index){
    var paramNama = param[index].split(':');
    var nama = param[1].split('');
    var initial = nama[0];
    return initial;
  }
  var inisialNama = ambilInisial(0);
  var inisialKota = ambilInisial(1);

  if(inisialNama == inisialKota){
    return true;
  } else {
    return false;
  }
}



var civilianID4 = "Nama:Bethy Barnard Barnacle,Kota:Bexhill";
console.log(isKillerTarget(civilianID4));
