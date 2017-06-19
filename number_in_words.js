function numberToWords(number) {
  // Your code here

let word = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'],
  result = '';
  
  if(number < 12){
    return result += word[number]
  }else if(number < 20){
    return result += word[number-10] + ' ' + word[11].slice(2)
  // }else if(number < 100){
  //   return result += 
  // }

}

// Driver code
console.log(numberToWords(12));

module.exports = {
  numberToWords: numberToWords
}
