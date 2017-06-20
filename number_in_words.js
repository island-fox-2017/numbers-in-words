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
    let puluhan = number % 100;
    return `seratus ${bilangan[Math.floor(puluhan/10)]} puluh ${bilangan[number%10]} `
  }else if (number < 1000) {
    let puluhan = number % 100;
    return `${bilangan[Math.floor(number/100)]} ratus ${bilangan[Math.floor(puluhan/10)]} puluh ${bilangan[puluhan%10]}`;
  }
}

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(855));

module.exports = {
  numberToWords: numberToWords
}