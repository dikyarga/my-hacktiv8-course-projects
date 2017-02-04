function dealWithTheJoker(player, joker){
  var playerPoint = {};

  for (var i = 0; i < player.length; i++) {
    var thisNumber = player[i];
    playerPoint[thisNumber] = player[i];
    playerPoint[thisNumber]["count"] = 0;
    // console.log(playerPoint[thisNumber]["count"]);
    if (playerPoint[thisNumber]["count"] == undefined) {
      playerPoint[thisNumber]["count"] = 1;
    } else {
      playerPoint[thisNumber]["count"] += 1;
    }
    console.log(playerPoint);
    // console.log(playerPoint);

  }
  // console.log(playerPoint);
}

console.log(dealWithTheJoker([2,2,3,3,5], [5,5,5,5,2])); // Lose
