setTimeout(function() {
  alert('hey!');
}, 2000); // Akan memanggil callback function berupa alert setelah 2 detik berlalu

setTimeout(() => {
  alert('hey');
}, 2000); // Akan memanggil callback arrow function berupa alert setelah 2 detik berlalu
