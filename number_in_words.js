function numberToWords(n) {
  let word = 'nol satu dua tiga empat lima enam tujuh delapan sembilan sepuluh sebelas seratus seribu'.split(' ');
  if (n<12) {return word[n];}
  if (n<20) {return word[n-10]+' belas';}
  if (n==100) {return 'seratus';}
  if (n==1000) {return 'seribu';}
  if (n<100) {return `${word[Math.floor(n/10)]} puluh ${(n%10) != 0? word[n%10] : ''}`;}
  if (n<1000) {return `${word[Math.floor(n/100)]} ratus ${(n%100) != 0 ? ' '+ numberToWords(n%100) : ''}`;}
  if (n<100000) {return `${numberToWords(Math.floor(n/1000))} ribu ${(n%1000) != 0 ? ' ' + numberToWords(n%1000) : ''}`;}
  if (n<1000000000) {return `${numberToWords(Math.floor(n/1000000))} juta ${(n%1000000) != 0 ? ' '+ numberToWords(n%1000000) : ''}`;}
  if (n<1000000000000) {return `${numberToWords(Math.floor(n/1000000000))} miliar ${(n%1000000000) != 0 ? ' ' + numberToWords(n%1000000000) : ''}`;}
  if (n<1000000000000000) {return `${numberToWords(Math.floor(n/1000000000000))} triliun ${(n%1000000000000) != 0 ? ' ' + numberToWords(n%1000000000000) : ''}`;}
}

// Driver code
console.log(numberToWords(1345));

module.exports = {
  numberToWords: numberToWords
}
