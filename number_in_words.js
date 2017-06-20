function numberToWords(number) {
  // Your code here
  var deret = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var satuan = ['puluh', 'ratus', 'ribu', 'puluh ribu', 'ratus ribu', 'juta', 'puluh juta'];
  if(number <= 11) {
    return deret[number];
  } else if(){
    
  }
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
