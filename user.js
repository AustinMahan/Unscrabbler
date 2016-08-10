$(document).ready(function(){
  var wordsOutput = []
  $('form').submit(function(e){
    e.preventDefault()
  })
  $('button').click(function(){
    $('h2').empty()
    var inputVal = $('#inputLetters').val()
    wordsOutput = getAllWords(inputVal)
    wordsOutput.forEach(function(word){
      $('h2').append(`<br> ${word}`)
    })
    $('#inputLetters').val('')
    console.log(wordsOutput[0]);
    wordOnPageTree(wordsOutput[0])
  })

  $('.letterLine').on('click', 'span', function(){
    $(this).parent().next().css('visibility', 'visible')
  })
})

function sortByLen(arr){
  var newArr = arr.sort(function(a, b){
  return b.length - a.length;
  });
  return newArr
}

function getAllWords(word){
  var output = []
  var userInput = allCombsSorted(word).filter(function(posComb){
    return posComb.length > 4
  })

  var userOutput = []
  userInput.forEach(function(posComb){
    if(testWord(posComb)){
      userOutput.push(posComb);
    }
  })

  wordsArr.forEach(function(word){
    userOutput.forEach(function(posComb){
      if(word == posComb){
        output.push(word);
      }
    })
  })
  return sortByLen(output)


// userInput.forEach(function(posComb){
//   wordsArr.forEach(function(word){
//     if(word == posComb){
//       console.log(word);
//     }
//   })
// })

}
// console.log(userInput.length)
