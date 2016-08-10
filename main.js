
var test = {}

wordsArr.forEach(function(word){
  if(!test.hasOwnProperty(word.charAt(0))){
    test[word.charAt(0)] = {}
  }
  for(var i = 0; i < word.length; i++){
    if(i == 1){
      if(!test[word.charAt(0)].hasOwnProperty(word.charAt(1))){
        test[word.charAt(0)][word.charAt(1)] = {}
      }
    }else if(i == 2){
      if(!test[word.charAt(0)][word.charAt(1)].hasOwnProperty(word.charAt(2))){
        test[word.charAt(0)][word.charAt(1)][word.charAt(2)] = {}
      }
    }else if(i == 3){
      if(!test[word.charAt(0)][word.charAt(1)][word.charAt(2)].hasOwnProperty(word.charAt(3))){
        test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)] = {}
      }
    }else if(i == 4){
      if(!test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)].hasOwnProperty(word.charAt(4))){
        test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)] = {}
      }
    }else if(i == 5){
      if(!test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)].hasOwnProperty(word.charAt(5))){
        test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)] = {}
      }
    }else if(i == 6){
      if(!test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)].hasOwnProperty(word.charAt(6))){
        test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)][word.charAt(6)] = {}
      }
    }else if(i == 7){
      if(!test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)][word.charAt(6)].hasOwnProperty(word.charAt(7))){
        test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)][word.charAt(6)][word.charAt(7)] = {}
      }
    }
  }
})

var testWord = function (word){
  for(var i = 0; i < word.length; i++){
    if(i ==0 && !test.hasOwnProperty(word.charAt(0))){
      return false;
    }else if(i == 1 && !test[word.charAt(0)].hasOwnProperty(word.charAt(1))){
      return false
    }else if(i == 2 && !test[word.charAt(0)][word.charAt(1)].hasOwnProperty(word.charAt(2))){
      return false
    }else if(i == 3 && !test[word.charAt(0)][word.charAt(1)][word.charAt(2)].hasOwnProperty(word.charAt(3))){
      return false
    }else if(i == 4 && !test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)].hasOwnProperty(word.charAt(4))){
      return false
    }
    else if(i == 5 && !test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)].hasOwnProperty(word.charAt(5))){
      return false
    }else if(i == 6 && !test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)].hasOwnProperty(word.charAt(6))){
      return false
    }else if(i == 7 && !test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)][word.charAt(6)].hasOwnProperty(word.charAt(7))){
      return false
    }
  }

  return true;
}

console.log(test);

function wordOnPageTree(word){
  $('allChars').html(Object.keys(test).join(', '))

  var firstArr = Object.keys(test)
  firstArr[firstArr.indexOf(word.charAt(0))] = `<span> ${word.charAt(0)}</span>`
  console.log(firstArr);
  $('#firstLetterP').html(firstArr.join(', '))

  var secArr = Object.keys(test[word.charAt(0)])
  secArr[secArr.indexOf(word.charAt(1))] = `<span> ${word.charAt(1)}</span>`
  $('#secLetterP').html(secArr.join(', '))

  var thirdArr = Object.keys(test[word.charAt(0)][word.charAt(1)])
  console.log(thirdArr);
  thirdArr[thirdArr.indexOf(word.charAt(2))] = `<span> ${word.charAt(2)}</span>`
  $('#thirdLetterP').html(thirdArr.join(', '))

  var fourArr = Object.keys(test[word.charAt(0)][word.charAt(1)][word.charAt(2)])
  fourArr[fourArr.indexOf(word.charAt(3))] = `<span> ${word.charAt(3)}</span>`
  $('#fourLetterP').html(fourArr.join(', '))

  var fifthArr = Object.keys(test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)])
  fifthArr[fifthArr.indexOf(word.charAt(4))] = `<span> ${word.charAt(4)}</span>`
  $('#fifthLetterP').html(fifthArr.join(', '))

  var sixArr = Object.keys(test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)])
  sixArr[sixArr.indexOf(word.charAt(5))] = `<span> ${word.charAt(5)}</span>`
  $('#sixthLeterP').html(sixArr.join(', '))

  var sevenArr = Object.keys(test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)])
  sevenArr[sevenArr.indexOf(word.charAt(6))] = `<span> ${word.charAt(6)}</span>`
  $('#seventhLetterP').html(sevenArr.join(', '))
  // console.log(test[word.charAt(0)][word.charAt(1)][word.charAt(2)][word.charAt(3)][word.charAt(4)][word.charAt(5)][word.charAt(6)]);
}
// if(testWord('zymology')){
//   console.log('zymology');
// }

// wordsArr.forEach(function(word){
//   if(word == 'zymology'){
//     console.log('zymology');
//   }
// })
