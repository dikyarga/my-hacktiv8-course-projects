var transformArrToLowerCase = (arr) => {
  return arr.map(isiArray => {
    return isiArray.toLowerCase();
  });
}

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
