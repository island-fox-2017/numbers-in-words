'use strict'

function numberToWords(number) {

  let words = '';
  let angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];

  // kurang dari 100
  if (number < 20) return words += angka[number];
  if (number < 100) return words += angka[Math.floor(number / 10)] + ' puluh ' + numberToWords(number % 10);

  // kurang dari 1.000
  if (number < 1000) {
    if (Math.floor(number / 100) == 1) return words += 'seratus ' +  numberToWords(number % 100);
    else return words += angka[Math.floor(number / 100)] + ' ratus ' + numberToWords(number % 100);
  }
  // kurang dari 1.000.000
  if (number < 1000000) {
    if (Math.floor(number / 1000) == 1) return words += 'seribu ' + numberToWords(number % 1000);
    else if (Math.floor(number / 100000) == 1) return words += 'seratus ribu ' + numberToWords(number % 1000);
    else return words += angka[Math.floor(number / 1000)] + ' ribu ' + numberToWords(number % 1000);
  }

  // kurang dari 1 milyar
  if (number < 1000000000) return words += numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);

  // kurang dari 1 trilyun
  if (number < 1000000000000) return words += numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000);

  // kurang dari quad
  if (number < 1000000000000000) return words += numberToWords(Math.floor(number / 1000000000000)) + ' trilyun ' + numberToWords(number % 1000000000000);

  return words;
} // ----- numberToWords

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(11));
console.log(numberToWords(111));
console.log(numberToWords(1111));
console.log(numberToWords(11111));
console.log(numberToWords(111111));
console.log(numberToWords(1111111));
console.log(numberToWords(11111111));
console.log(numberToWords(111111111));
console.log(numberToWords(1111111111));
console.log(numberToWords(11111111111));
console.log(numberToWords(111111111111));
console.log(numberToWords(1111111111111));
console.log(numberToWords(11111111111111));
console.log(numberToWords(111111111111111));
console.log(numberToWords(399999999999999))


module.exports = {
  numberToWords: numberToWords
}