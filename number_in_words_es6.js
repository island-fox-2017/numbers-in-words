'use strict'

// console.log("ES6 compiler is starting");
let toWords = n => {
  // Your code here
  var arrAngka = [
    [0,''],[1,'satu'],[2,'dua'],[3,'tiga'],[4,'empat'],[5,'lima'],[6,'enam'],[7,'tujuh'],[8,'delapan'],[9,'sembilan'],[10,'sepuluh'],[11,'sebelas'],[12,'dua belas'],[13,'tiga belas'],[14,'empat belas'],[15,'lima belas'],[16,'enam belas'],[17,'tujuh belas'],[18,'delapan belas'],[19,'sembilan belas']
  ]

  var nString = n.toString()
  var nLength = n.toString().length

  var digit1 = nString.charAt(0)
  var digit2 = nString.charAt(1)
  var digit3 = nString.charAt(2)

  if (n<=19) {
    return arrAngka[n][1]
  }
  else if (n<=99) {
    return arrAngka[digit1][1] + ' puluh ' + arrAngka[digit2][1]
  }
  else if (n<=999) {
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

};

// Driver code
// console.log(toWords(1000000000000000000000));
for (let i = 900; i <= 999; i++) {
  console.log(toWords(i));
}
