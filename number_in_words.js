function numberToWords(number) {
  let satuan = "Nol Satu Dua Tiga Empat Lima Enam Tujuh Delapan Sembilan Sepuluh Sebelas seratus seribu".split(" ");
  if (number < 12) return `${satuan[number]}`;
  if (number < 20) return `${satuan[number-10]} Belas`;
  if (number === 100) return `${satuan[12]}`;
  if (number === 1000) return `${satuan[13]}`;
  let digit = number%10;
  if (number < 100) return `${satuan[Math.floor(number/10)]} Puluh ${digit? satuan[digit]: ""}`;
  if (number < 1000) return `${satuan[Math.floor(number/100)]} Ratus ${(number%100 == 0? "": "" + numberToWords(number%100))}`;
  if (number < 1000000) return `${numberToWords(Math.floor(number/1000))} Ribu ${(number%1000 != 0? "" + numberToWords(number%1000): "")}`;
  if (number < 1000000000) return `${numberToWords(Math.floor(number/1000000))} Juta ${(number%1000000 != 0? "" + numberToWords(number%1000000): "")}`;
  if (number < 1000000000000) return `${numberToWords(Math.floor(number/1000000000))} Milyar ${(number%1000000000 != 0? "" + numberToWords(number%1000000000): "")}`;
  if (number < 1000000000000000) return `${numberToWords(Math.floor(number/1000000000000))} Triliun ${(number%1000000000000 != 0? "" + numberToWords(number%1000000000000): "")}`;
}

// Driver code
console.log(numberToWords(999000000000000));
console.log(numberToWords(987654323456789));
console.log(numberToWords(988765432798));
console.log(numberToWords(9876543210));
console.log(numberToWords(987265432));
console.log(numberToWords(10990421));
// console.log(numberToWords(4567891));
// console.log(numberToWords(1000000));
// console.log(numberToWords(998765));
// console.log(numberToWords(700000));
// console.log(numberToWords(100000));
// console.log(numberToWords(55555));
// console.log(numberToWords(20000));
// console.log(numberToWords(10000));
// console.log(numberToWords(4978));
// console.log(numberToWords(1111));
// console.log(numberToWords(1000));
// console.log(numberToWords(978));
// console.log(numberToWords(401));
// console.log(numberToWords(100));
// console.log(numberToWords(68));

module.exports = {
  numberToWords: numberToWords
}
