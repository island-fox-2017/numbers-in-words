function numberToWords(number) {
  // Your code here
  let words = "", i;
  let word = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
  
  if (number < 12){
return words += word[number]
  }else if (number < 20){
    return numberToWords(number%10) + " belas"
  }else if (number < 100){
    return numberToWords(Math.floor(number/10)) + " puluh " + numberToWords(number%10)
  }else if (number < 200){
    return words += "seratus " + numberToWords(number%100)
  }else if (number < 1000){
    return numberToWords(Math.floor(number/100)) + " ratus " + numberToWords(number%100)
  }else if (number < 2000){
    return words += " seribu " + numberToWords(number%1000)
  }else if (number < 1000000){
    return numberToWords(Math.floor(number/1000)) + " ribu " + numberToWords(number%1000)
  }else if (number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) + " juta " + numberToWords(number%1000000)
  }else if (number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000)) + " milyar " + numberToWords(number%1000000000)
  }else if (number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000)) + " triliun " + numberToWords(number%1000000000000)
  }
}

// Driver code
console.log(numberToWords(399111));

module.exports = {
  numberToWords: numberToWords
}
