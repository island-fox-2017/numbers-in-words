function numberToWords(number) {
  // Your code here
  var matrixAngka = [
    [0, ''],
    [1, 'satu'],
    [2, 'dua'],
    [3, 'tiga'],
    [4, 'empat'],
    [5, 'lima'],
    [6, 'enam'],
    [7, 'tujuh'],
    [8, 'delapan'],
    [9, 'sembilan'],
    [10, 'sepuluh'],
    [11, 'sebelas'],
    [12, 'dua belas'],
    [13, 'tiga belas'],
    [14, 'empat belas'],
    [15, 'lima belas'],
    [16, 'enam belas'],
    [17, 'tujuh belas'],
    [18, 'delapan belas'],
    [19, 'sembilan belas']
  ]

  digitString = number.toString();

  //100.000.000.000.000 - 999.999.999.999.999
  if(digitString.length == 15)
  {
    threeFirstDigit = digitString[0] + digitString[1] + digitString[2];
    return numberToWords(threeFirstDigit) + ' triliun ' + numberToWords(number - (threeFirstDigit * 1000000000000));
  }

  //10.000.000.000.000 - 99.999.999.999.999
  else if(digitString.length == 14)
  {
    twoFirstDigit = digitString[0] + digitString[1];
    return numberToWords(twoFirstDigit) + ' triliun ' + numberToWords(number - (twoFirstDigit * 1000000000000));
  }

  //1.000.000.000.000 - 9.999.999.999.999
  else if(digitString.length == 13)
  {
    firstNumber = digitString[0];
    return numberToWords(firstNumber) + ' triliun ' + numberToWords(number - (firstNumber * 1000000000000));
  }

  //100.000.000.000 - 999.999.999.999
  else if(digitString.length == 12)
  {
    threeFirstDigit = digitString[0] + digitString[1] + digitString[2];
    return numberToWords(threeFirstDigit) + ' milyar ' + numberToWords(number - (threeFirstDigit * 1000000000));
  }

  //10.000.000.000 - 99.999.999.999
  else if(digitString.length == 11)
  {
    twoFirstDigit = digitString[0] + digitString[1];
    return numberToWords(twoFirstDigit) + ' milyar ' + numberToWords(number - (twoFirstDigit * 1000000000));
  }

  //1.000.000.000 - 9.999.999.999
  else if(digitString.length == 10)
  {
    firstNumber = digitString[0];
    return numberToWords(firstNumber) + ' milyar ' + numberToWords(number - (firstNumber * 1000000000));
  }

  //100000000 - 999999999
  else if(digitString.length == 9)
  {
    threeFirstDigit = digitString[0] + digitString[1] + digitString[2];
    return numberToWords(threeFirstDigit) + ' juta ' + numberToWords(number - (threeFirstDigit * 1000000));
  }


  //10000000 - 99999999
  else if(digitString.length == 8)
  {
    twoFirstDigit = digitString[0] + digitString[1];
    return numberToWords(twoFirstDigit) + ' juta ' + numberToWords(number - (twoFirstDigit * 1000000));
  }

  //1000000 - 9999999
  else if(digitString.length == 7)
  {
    firstNumber = digitString[0];
    return numberToWords(firstNumber) + ' juta ' + numberToWords(number - (firstNumber * 1000000));
  }

  //100000 - 999999
  else if(digitString.length == 6)
  {
    threeFirstDigit = digitString[0] + digitString[1] + digitString[2];
    return numberToWords(threeFirstDigit)+ ' ribu ' + numberToWords(number - (threeFirstDigit * 1000))
  }

  //10000 - 99999
  else if(digitString.length == 5)
  {
    twoFirstDigit = digitString[0] + digitString[1];
    return numberToWords(twoFirstDigit)+ ' ribu ' + numberToWords(number - (twoFirstDigit * 1000))
  }

  //1000 - 9999
  else if(digitString.length == 4)
  {
    firstNumber = digitString[0];
    if(firstNumber == 1)
    {
      return 'seribu ' + numberToWords(number - (firstNumber * 1000));
    }
    else
    {
      return numberToWords(firstNumber) + ' ribu ' + numberToWords(number - (firstNumber * 1000));
    }
  }
  //angka 100 - 999
  else if(digitString.length == 3)
  {
    firstNumber = digitString[0];

    if(firstNumber == 1)
    {
      return 'seratus ' + numberToWords(number - (firstNumber * 100));
    }
    else
    {
      return numberToWords(firstNumber) + ' ratus ' + numberToWords(number - (firstNumber * 100));
    }
  }

  //20 - 99
  else if (digitString.length == 2 && number > 19)
  {
      firstNumber = digitString[0];

      return numberToWords(firstNumber) + ' puluh ' + numberToWords(number - (firstNumber*10));
  }
  //angka 1 - 19
  else
  {
    for(var i = 0; i < matrixAngka.length; i++)
    {
      if(number == matrixAngka[i][0])
      {
        return matrixAngka[i][1];
      }
    }
  }
}

// Driver code
// console.log(numberToWords(1000000));

console.log(numberToWords(1));
console.log(numberToWords(3));
console.log('----------------------');
console.log(numberToWords(19));
console.log(numberToWords(16));
console.log('----------------------');
console.log(numberToWords(59));
console.log(numberToWords(99));
console.log('----------------------');
console.log(numberToWords(121));
console.log(numberToWords(599));
console.log('----------------------');
console.log(numberToWords(4591));
console.log(numberToWords(5991));
console.log('----------------------');
console.log(numberToWords(64591));
console.log(numberToWords(75991));
console.log('----------------------');
console.log(numberToWords(364591));
console.log(numberToWords(975991));
console.log('----------------------');
console.log(numberToWords(1364591));
console.log(numberToWords(2975991));
console.log('----------------------');
console.log(numberToWords(31364591));
console.log(numberToWords(72975991));
console.log('----------------------');
console.log(numberToWords(931364591));
console.log(numberToWords(272975991));
console.log('----------------------');
console.log(numberToWords(1931364591));
console.log(numberToWords(2272975991));
console.log('----------------------');
console.log(numberToWords(11111111111));
console.log(numberToWords(42272975991));
console.log('----------------------');
console.log(numberToWords(111111111111));
console.log(numberToWords(542272975991));
console.log('----------------------');
console.log(numberToWords(1111111111111));
console.log(numberToWords(5422729759915));
console.log('--------------------------');
console.log(numberToWords(999000000000000));



module.exports = {
  numberToWords: numberToWords
}
