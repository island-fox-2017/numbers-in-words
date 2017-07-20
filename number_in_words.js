function numberToWords(number) {
  // Your code here
  var word = [
    {satuan : ['satu','dua','tiga','empat','lima','enam',
              'tujuh','delapan','sembilan']},
    {puluhan :['sepuluh','dua puluh','tiga puluh','empat puluh','lima puluh',
              'enam puluh','tujuh puluh','delapan puluh','sembilan puluh']},
    {belasan :['sebelas','duabelas','tigasbelas','empatbelas','limabelas',
              'enambelas','tujuhbelas','delapanbelas','sembilanbelas']},
    {ratusan :['seratus','dua ratus','tiga ratus','empat ratus','enam ratus',
              'tujuh ratus','delapan ratus','sembilan ratus']},
    {ribuan  :['seribu','dua ribu','tiga ribu','empat ribu','lima ribu','enam ribu',
              'tujuh ribu','delapan ribu','sembilan ribu']},
    {puluhanRibu: ['sepuluh ribu','dua puluh ribu','tiga puluh ribu','empat puluh ribu',
                  'lima puluh ribu','emam puluh ribu','tujuh puluh ribu','delapan puluh ribu',
                  'sembilan puluh ribu']},
    {belasRibu  :['sebelas ribu','duabelas ribu','tigasbelas ribu','empatbelas ribu',
                 'limabelas ribu','enambelas ribu','tujuhbelas ribu','delapanbelas ribu',
                 'sembilanbelas ribu']}



  ]

  if(number <=0){
    return hasil.join(' ')
  }
  else if(number>0 && number <10){
    console.log('satuan');
    hasil.push(word[0].satuan[number-1]);
    return(numberToWord(number-number))
  }
  else if(number >=10 && number<100){
    console.log('puluhan');
    let pisah = number.toString().split('')
    hasil.push(word[1].puluhan[parseInt(pisah[0])-1]);
    return(numberToWord(number%10))
  }
  else if(number>10 && number <20){
    console.log('belasan');
    hasil.push(word[2].belasan[(number-10)-1]);
    return(numberToWord(number-number))
  }
  else if (number >=100 && number<1000) {
    console.log('ratusan');
    let pisah = number.toString().split('')
    hasil.push(word[3].ratusan[parseInt(pisah[0])-1])
    return(numberToWord(number%100))
  }
  else if (number >= 1000 && number <10000){
    console.log('ribuan');
    let pisah = number.toString().split('')
    hasil.push(word[4].ribuan[parseInt(pisah[0])-1])
    return(numberToWord(number%1000))
  }
  else if (number >= 10000 && number <100000){
    console.log('puluhan ribuan');
    let pisah = number.toString().split('')
    if(pisah[1]==0){
      hasil.push(word[5].puluhanRibu[parseInt(pisah[0])-1])
      return(numberToWord(number%10000))
    }
    else if (pisah[0]==1 && pisah[1] <=10) {
      hasil.push(word[6].belasRibu[parseInt(pisah[1])-1])
      return(numberToWord(number%10000))
    }
    else if(pisah[0]>= 2 && pisah[1]>0){
      hasil.push(word[1].puluhan[parseInt(pisah[0])-1])
      hasil.push(word[0].satuan[parseInt(pisah[1])-1]+' ribu')
      return(numberToWord(number%10000-))
    }
  }


}
var hasil =[]
// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
