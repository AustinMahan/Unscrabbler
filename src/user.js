$(document).ready(function() {
  var wordsOutput = [];
  var userInput;

  $('form').submit(function(e) {
    e.preventDefault();
  });

  $('button').click(function() {
    $('h2').empty();
    var inputVal = $('#inputLetters').val().toLowerCase();
    wordsOutput = getAllWords(inputVal);
    if (wordsOutput.length === 0) {
      $('h2').append(`<br>There is no words with those letters`);
    }else {
      wordsOutput.forEach(function(word) {
        $('h2').append(`<br> ${word}`);
      });
    }
    $('#inputLetters').val('');
    wordOnPageTree(wordsOutput[0]);
  });

  $('.letterLine').on('click', 'span', function() {
    $(this).parent().next().css('visibility', 'visible');
  });
  $('.letterLine').on('mouseover', 'span', function() {
    $(this).css('cursor', 'pointer');
  });
  $('.letterLine').on('mouseover', function() {
    $(this).css('cursor', 'default');
  });
});

//shows the longer words first
function sortByLen(arr) {
  var newArr = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return newArr;
}

var date = new Date();

function getAllWords(word) {
  console.log('start fast');
  date = new Date();
  var fastTime1 = {
    mins: date.getMinutes(),
    sec: date.getSeconds(),
    milli: date.getMilliseconds()
  }
  console.log(`${fastTime1.mins} : ${fastTime1.sec} : ${fastTime1.milli}`);
  var output = [];
  userInput = allCombsSorted(word).filter(function(posComb) {
    return posComb.length > 4;
  });

  //runs through the tree for every possible combination and adds them to the useroutput array
  var userOutput = [];
  userInput.forEach(function(posComb) {
    if (testWord(posComb)) {
      userOutput.push(posComb);
    }
  });
  console.log(userInput.length);
  // checks the user output array against all the words to make sure the words outputted are whole words and not partial words
  wordsArr.forEach(function(word) {
    userOutput.forEach(function(posComb) {
      if (word == posComb) {
        output.push(word);
      }
    });
  });
  console.log('done with fast');
  date = new Date();
  var fastTime2 = {
    mins: date.getMinutes(),
    sec: date.getSeconds(),
    milli: date.getMilliseconds()
  }
  console.log(`${fastTime2.mins} : ${fastTime2.sec} : ${fastTime2.milli}`);
  console.log(`Fast time taken: ${Math.abs(fastTime2.mins - fastTime1.mins)} : ${Math.abs(fastTime2.sec  - fastTime1.sec)} : ${Math.abs(fastTime2.milli  - fastTime1.milli)}`);
  theSlowWay()
  return sortByLen(output);
  // use 'celrifd' to test
}

//loops through it regularly
function theSlowWay() {
  console.log('starting slow');
  date = new Date();
  var slowTime1 = {
    mins: date.getMinutes(),
    sec: date.getSeconds(),
    milli: date.getMilliseconds()
  }
  console.log(`${slowTime1.mins} : ${slowTime1.sec} : ${slowTime1.milli}`);
  userInput.forEach(function(posComb) {
    wordsArr.forEach(function(word) {
      if (word == posComb) {
        console.log(word);
      }
    })
  })
  console.log('finished slow');
  date = new Date();
  var slowTime2 = {
    mins: date.getMinutes(),
    sec: date.getSeconds(),
    milli: date.getMilliseconds()
  }
  console.log(`${slowTime2.mins} : ${slowTime2.sec} : ${slowTime2.milli}`);
  console.log(`Slow time taken: ${Math.abs(slowTime2.mins - slowTime1.mins)} : ${Math.abs(slowTime2.sec  - slowTime1.sec)} : ${Math.abs(slowTime2.milli  - slowTime1.milli)}`);
}
