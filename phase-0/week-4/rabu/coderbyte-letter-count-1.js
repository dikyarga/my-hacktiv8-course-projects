function LetterCountI(str) {
  var arrStr = str.toLowerCase().split(' ');
  console.log(arrStr);
  var res = {};
  for (var i = 0; i < arrStr.length; i++) {
    // arrStr[i]

    var thisWord = arrStr[i];
    console.log(res);
    res[thisWord] = {};
    // console.log(res);

    res[thisWord]["highest"] = 0;

    for (var j = 0; j < arrStr[i].length; j++) {
      var thisChar = thisWord[j];
      if (res[thisWord][thisChar] == undefined) {
        res[thisWord][thisChar] = 1;
      } else {
        res[thisWord][thisChar] += 1;
      }

      if (res[thisWord][thisChar] > res[thisWord]["highest"]) {
        res[thisWord]["highest"] = res[thisWord][thisChar];
      }

    }
    // console.log(res[thisWord][thisChar]);
    // console.log(res[thisWord]["highest"]);
  }

  var ans = { word : null,
              count: 1}

  for (var x in res) {
    if (res[x]["highest"] > ans["count"]) {
        ans["count"] = res[x]["highest"];
        ans["word"] = x;
    }
    // console.log(x);
  }
  // console.log(res);
  if (ans['count'] === 1) {
    return -1;
  } else {
    return ans['word'];
  }
}

console.log(LetterCountI('Hello Apple pai'));
