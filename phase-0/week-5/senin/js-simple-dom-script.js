var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element
console.log(pageTitleElement);
var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.
console.log(pageBoxElements);
var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element
console.log(pageHeadings);

var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
// isi <div id="page-title"> adalah Sample Page Title

var pageBoxElementsContent = pageBoxElements.innerHTML;
console.log('isi <div class="page-box"> :' + pageBoxElementsContent);
// isi <div class="page-box"> adalah undefined!
