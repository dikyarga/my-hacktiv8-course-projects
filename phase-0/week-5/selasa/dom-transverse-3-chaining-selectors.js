/*
============================
 Menseleksi DOM Lebih Dalam
============================
*/

/*
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
var contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
var strongElem = contohP1.children[0];
console.log(strongElem);

/*
2. Parent -> Child -> Child dengan Chaining Selector
*/

// Menggunakan chaining selector atau selektor beruntun.
console.log(contohDiv1.children[0].children[0]);

/*
3. Element -> previous sibling -> previous sibling cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <h1></h1> yang berada sebelum <div id="contoh-div-1">
var h1Elem = contohDiv1.previousElementSibling;
console.log(h1Elem); // <h1></h1>

// Mendapatkan null, dengan mengakses previous sibling dari <h1></h1>
var justNull = h1Elem.previousElementSibling;
console.log(justNull); // null

/*
4. Element -> previous sibling -> previous sibling dengan chaining selector
*/

// Penggunaan chaining selector
console.log(contohDiv1.previousElementSibling.previousElementSibling); // null
