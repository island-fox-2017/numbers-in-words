function numberToWords(number) {
  // Your code here
  let result = "";
  let numberStr = number.toString();
  let numLength = number.toString().length;
  let angka = [
    [0, ""], [1, "Satu"], [2, "Dua"], [3, "Tiga"], [4, "Empat"], [5, "Lima"], [6, "Enam"], [7, "Tujuh"], [8, "Delapan"], [9, "Sembilan"], [11, "Sebelas"], [12, "Dua Belas"], [13, "Tiga Belas"], [14, "Empat Belas"], [15, "Lima Belas"], [16, "Enam Belas"], [17, "Tujuh Belas"], [18, "Delapan Belas"], [19, "Sembilan Belas"]
  ];
  let suffix = [
    [1, " ", 1], [2, " Puluh ", 10], [3, " Ratus ", 100], [4, " Ribu ", 1000], [5, " Puluh ", 10000], [6, " Ratus ", 100000], [7, " Juta ", 1000000], [8, " Puluh ", 10000000], [9, " Ratus ", 100000000], [10, " Miliar ", 1000000000], [11, " Puluh ", 10000000000], [12, " Ratus ", 100000000000], [13, " Triliun ", 1000000000000], [14, " Puluh ", 10000000000000], [15, " Ratus ", 100000000000000]
  ];
  for (let i = 0; i < numberStr.length; i++) {
    for (let j = 0; j < angka.length; j++) {
      
      for (let z = 0; z < suffix.length; z++) {
        if (numLength === suffix[z][0]) {
          if (parseInt(numberStr[i]) === angka[j][0]) {
            if(suffix[z][1] !== " ") {
              return (angka[j][1] + suffix[z][1] + numberToWords(number - (angka[j][0] * suffix[z][2]))).replace("Satu Puluh", "Sepuluh").replace("Satu Ratus", "Seratus").replace("Satu Ribu", "Seribu");
            }
            return angka[j][1];
          }
        }
      }
      
    }
  }
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
