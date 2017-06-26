function numberToWords(number, terbilang='') {
  // Your code here
  var deret = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas','dua belas', 'tiga belas', 'empat belas','lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  var satuan = ['puluh', 'ratus', 'ribu', 'puluh ribu', 'ratus ribu', 'juta', 'puluh juta'];
  if(number.toString().length == 13){
    var hasil = Math.floor(number / 100000000000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' Triliun '
    return numberToWords(number - (hasil * 100000000000), terbilang)

  } else if(number.toString().length == 12){
    var hasil = Math.floor(number / 10000000000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' ratus milyar '
    return numberToWords(number - (hasil * 10000000000), terbilang)

  } else if(number.toString().length == 11){
    var hasil = Math.floor(number / 1000000000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' puluh milyar '
    return numberToWords(number - (hasil * 1000000000), terbilang)

  } else if(number.toString().length == 10){
    var hasil = Math.floor(number / 100000000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' milyar '
    return numberToWords(number - (hasil * 100000000), terbilang)

  } else if(number.toString().length == 9){
    var hasil = Math.floor(number / 10000000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' ratus juta '
    return numberToWords(number - (hasil * 10000000), terbilang)

  } else if(number.toString().length == 8){
    var hasil = Math.floor(number / 1000000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' puluh juta '
    return numberToWords(number - (hasil * 1000000), terbilang)

  } else if(number.toString().length == 7){
    var hasil = Math.floor(number / 100000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' juta '
    return numberToWords(number - (hasil * 100000), terbilang)


  } else if(number.toString().length == 6){
    var hasil = Math.floor(number / 100000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' ratus ribu '
    return numberToWords(number - (hasil * 100000), terbilang)


  } else if(number.toString().length == 5){
    var hasil = Math.floor(number / 10000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' puluh ribu '
    return numberToWords(number - (hasil * 10000), terbilang)


  } else if(number.toString().length == 4){
    var hasil = Math.floor(number / 1000);
    // console.log(hasil);
    terbilang += deret[hasil] + ' ribu '
    return numberToWords(number - (hasil * 1000), terbilang)


  } else if(number.toString().length == 3){
      var hasil = Math.floor(number / 100);
      // console.log(hasil);
      terbilang += deret[hasil] + ' ratus '
      return numberToWords(number - (hasil * 100), terbilang)


    } else if(number.toString().length == 2 && number > 19){
    // var carisisa = number * 2
    var hasil = Math.floor(number / 10);
    // console.log(hasil);
    terbilang += deret[hasil] + ' puluh '
    return numberToWords(number - (hasil * 10), terbilang)
  }
  terbilang += deret[number];

  return terbilang
}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(1000000000000));
console.log(numberToWords(1));
console.log(numberToWords(19));
console.log(numberToWords(25));
console.log(numberToWords(155));
console.log(numberToWords(768));
console.log(numberToWords(7680));
console.log(numberToWords(5068));
console.log(numberToWords(70068));


module.exports = {
  numberToWords: numberToWords
}
