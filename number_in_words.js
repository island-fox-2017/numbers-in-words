// function numberToWords(number) {
//   // Your code here
// }

// // Driver code
// console.log(numberToWords(1000000));



function in_words(num){

var words = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
//var result="";
  if(num < 12){
    return words[num];
  }
  else if(num < 20){
    //result  hasil + in_words(num - 10) + "Belas";
    //return result;
    return in_words(num - 10) + " belas";
  }
  else if(num < 100){
    return in_words(parseInt(num/10)) + " puluh " + in_words(num%10);
  }
  else if(num < 200){
    return "seratus " + in_words(num-100);
  }
  else if(num < 1000){
    return in_words(parseInt(num/100)) + " ratus " + in_words(num%100);
  }
  else if(num < 2000){
    return "seribu " + in_words(num-1000);
  }
  else if(num < 1000000){
    return in_words(parseInt(num/1000)) + " ribu " + in_words(num%1000);
  }
  else if(num < 1000000000){
    return in_words(parseInt(num/1000000)) + " juta " + in_words(num%1000000);
  }
  else if(num < 10000000000){
    return "Angka harus lebih kecil dari 1 Milyar"
  }
}

console.log(in_words(4));
//console.log(in_words(14));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));

module.exports = {
  in_words: in_words
}
