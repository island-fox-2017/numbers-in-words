function numberToWords(number) {
  // Your code here
  var arrAngka = [
    [0,''],[1,'satu'],[2,'dua'],[3,'tiga'],[4,'empat'],[5,'lima'],[6,'enam'],[7,'tujuh'],[8,'delapan'],[9,'sembilan'],[10,'sepuluh'],[11,'sebelas'],[12,'dua belas'],[13,'tiga belas'],[14,'empat belas'],[15,'lima belas'],[16,'enam belas'],[17,'tujuh belas'],[18,'delapan belas'],[19,'sembilan belas']
  ]

  var numberString = number.toString()
  var numberLength = number.toString().length

  var digit1 = numberString.charAt(0)
  var digit2 = numberString.charAt(1)
  var digit3 = numberString.charAt(2)

  if (number<=19) {
    return arrAngka[n][1]
  }
  else if (number<=99) {
    return arrAngka[digit1][1] + ' puluh ' + arrAngka[digit2][1]
  }
  else if (number<=999) {
    if (digit1==1 && digit2==0 && digit3==0) {
      // console.log(digit1+digit2+digit3);
      return 'seratus'
    }
    else if (digit1==1 && digit2+digit3<=19) {
      return 'seratus ' + arrAngka[parseInt(digit2+digit3)][1]
    }
    else if (digit1==1 && digit2+digit3<=99) {
      return 'seratus ' + arrAngka[digit2][1] + ' puluh ' + arrAngka[digit3][1]
    }
    else if (digit1<=9 && digit2+digit3<=19) {
      // console.log('tes');
      return arrAngka[digit1][1] + ' ratus ' + arrAngka[parseInt(digit2+digit3)][1]
    }
    else if (digit1<=9 && digit2+digit3<=99) {
      return arrAngka[digit1][1] + ' ratus ' + arrAngka[digit2][1] + ' puluh ' + arrAngka[digit3][1]
    }
  }
}

// Driver code
// console.log(numbernumberToWords(1000000));
for (var i = 900; i <= 999; i++) {
  console.log(numberToWords(i));
}







module.exports = {
  numberToWords: numberToWords
}
