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

Kamu dapat mencoba kode di atas disini

Contoh Class Sederhana 2, dengan Setter dan Getter

class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }

  setWidth(newWidth) {
    this.width = newWidth;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  getArea() {
    let area = this.height * this.width;
    return area;
  }
}

let kotak = new Square(100, 200);
let kotakLain = new Square(300, 400);

console.log(kotakLain.getWidth()); // 400
console.log(kotakLain.getArea()); // 120000

console.log(kotak.getHeight()); // 100
kotak.setHeight(200);
console.log(kotak.getHeight()); // 200
console.log(kotak.getArea()); // 40000
