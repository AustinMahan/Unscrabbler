$(document).ready(function(){
  var wordsOutput = []


  $('form').submit(function(e){
    e.preventDefault()
  })

  $('button').click(function(){
    $('h2').empty()
    var inputVal = $('#inputLetters').val()
    wordsOutput = getAllWords(inputVal)
    if(wordsOutput.length == 0){
      $('h2').append(`<br>There is no words with those letters`)
    }else{
      wordsOutput.forEach(function(word){
        $('h2').append(`<br> ${word}`)
      })
    }
    $('#inputLetters').val('')
    wordOnPageTree(wordsOutput[0])
  })

  $('.letterLine').on('click', 'span', function(){
    $(this).parent().next().css('visibility', 'visible')
  })
  $('.letterLine').on('mouseover', 'span', function(){
    $(this).css('cursor', 'pointer')
  })
  $('.letterLine').on('mouseover', function(){
    $(this).css('cursor', 'default')
  })
})

//shows the longer words first
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
  console.log('done');
  //runs through the tree for every possible combination and adds them to the useroutput array
  var userOutput = []
  userInput.forEach(function(posComb){
    if(testWord(posComb)){
      userOutput.push(posComb);
    }
  })
  console.log(userInput.length)
  // checks the user output array against all the words to make sure the words outputted are whole words and not partial words
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

// use 'alsmjgn' to test
}
