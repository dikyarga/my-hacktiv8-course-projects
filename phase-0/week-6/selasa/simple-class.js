class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let kotak = new Square(100, 200);
let kotakLain = new Square(300, 400);

console.log(kotak.height); // 100
console.log(kotakLain.width); // 400
