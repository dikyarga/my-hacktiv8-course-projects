function rollDice(diceResultsParam) {
  // coding disini
  var hasil = 0;
  for(var i = 0; i < diceResultsParam.length; i++){
    console.log(diceResultsParam[i]);
  	if(diceResultsParam[i] !== 1){
    	hasil += diceResultsParam[i] * 100;
    } else {
    	hasil -= 1000;
    }
  }
  return hasil;
}

var diceResults1 = [3, 3, 1];
console.log(rollDice(diceResults1));
