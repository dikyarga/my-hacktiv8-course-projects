var pageTitleElement = document.getElementById("fill-me");
pageTitleElement.innerHTML = 'HALO!';

var changeAllOfMe = document.getElementsByClassName("change-all-of-me");
for (var i = 0; i < changeAllOfMe.length; i++) {
  changeAllOfMe[i].innerHTML = 'HALO JUGA!';
}

var insideH2 = document.getElementsByTagName("h2");
console.log(insideH2);

insideH2[0].innerText = 'Apa Kabar!';
console.log(insideH2);
