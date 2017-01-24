/*
=============================================
 Menseleksi DOM berdasarkan hubungan Sibling
=============================================
*/

// Menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');

// Mendapatkan sibling setelah <div id="contoh-div-1">
var contohDiv1NextSibling = contohDiv1.nextElementSibling;

console.log(contohDiv1NextSibling); // <div id="contoh-div-2">...</div>


// Mendapatkan sibling sebelum <div id="contoh-div-1">
var contohDiv1PrevSibling = contohDiv1.previousElementSibling;

console.log(contohDiv1PrevSibling); // <h1></h1>
