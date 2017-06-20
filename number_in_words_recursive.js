function numberToWords(number) {
  // Your code here
  let bilangan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas'];

  if (number <= 15) {
    return bilangan[number];
  } else if (number < 20) {
    return `${bilangan[(number%10)]} belas`;
  } else if (number < 50) {
    return `${bilangan[Math.floor(number/10)]} puluh ${bilangan[number%10]}`;
  } else if (number < 100) {
    return `${bilangan[Math.floor(number/10)]} puluh ${bilangan[number%10]}`;
  } else if (number < 200) {
    return `seratus ${numberToWords(number%100)}`;
  } else if (number < 1000) {
    let puluhan = number % 100;
    return `${bilangan[Math.floor(number/100)]} ratus ${numberToWords(number%100)}`;
  } else if (number < 2000) {
    return `seribu ${numberToWords(number%1000)}`;
  } else if (number < 1000000) {
    return `${numberToWords(Math.floor(number / 1000))} ribu ${numberToWords(number % 1000)}`
  } else if (number < 1000000000) {
    return `${numberToWords(Math.floor(number / 1000000))} juta ${numberToWords(number % 1000000)}`
  } else if (number < 1000000000000) {
    return `${numberToWords(Math.floor(number / 1000000000))} miliar ${numberToWords(number % 1000000000)}`;
  } else if (number < 1000000000000000) {
    return `${numberToWords(Math.floor(number / 1000000000000))} triliun ${numberToWords(number % 1000000000000)}`
  }
}

// var angka = 900600000;
// var modulus = angka % 1000000;
// 
// console.log(modulus);

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(999000006000000));

module.exports = {
  numberToWords: numberToWords
}