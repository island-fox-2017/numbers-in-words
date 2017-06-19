function numberToWords(number) {
  // Your code here

let word = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'],
  result = '';
  
  if(number < 12){
    return result += word[number]
  }else if(number < 20){
    return result += word[number-10] + ' ' + word[11].slice(2)
  }else if(number < 100){
    return result += word[Math.floor(number/10)] + ' ' + word[10].slice(2) + ' ' + word[number%10]
  }else if(number < 200){
    return result += 'Seratus ' + numberToWords(number%100)
  }else if(number < 1000){
    return result += word[Math.floor(number/100)] + ' ratus ' + numberToWords(number%100)
  }else if(number < 2000){
    return 'seribu ' + numberToWords(number % 1000)
  }else if(number < 1000000){
    return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
  }else if(number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number%1000000)
  }else if (number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + " miliar " + numberToWords(number % 1000000000);
  }else if (number < 1000000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + " triliun " + numberToWords(number % 1000000000000);
  }

}

// Driver code
console.log(numberToWords(11111111111111));

module.exports = {
  numberToWords: numberToWords
}
