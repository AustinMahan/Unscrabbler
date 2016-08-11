//finds all the possible combinations of the word and then filters out the duplicates
function allCombsSorted(userWord) {
  var possibleCombs = Object.keys(getWordsNew(userWord))
  possibleCombs = possibleCombs.filter(function(word, pos, self){
    return self.indexOf(word) == pos
 })

return possibleCombs
}

// gets all permutaions from a word
function getWordsNew(masterword){
  var result={}
  var a,i,l;
  function nextLetter(a,l,key,used){
    var i;
    var j;
    if(key.length==l){
      return;
    }
    for(i=0;i<l;i++){
      if(used.indexOf(""+i)<0){
        result[key+a[i]]="";
        nextLetter(a,l,key+a[i],used+i);
      }
    }
   }
  a = masterword.split("");
  l = a.length;
  for (i = 0; i < a.length; i++) {
    result[a[i]] = "";
    nextLetter(a, l, a[i], "" + i)
  }
  return result;
}

// sorts by length and returns longer words first
//
// // returns words if only longer than 4 letters
// function longerThan4 (arr){
//   var newArr = arr.filter(function(el){
//     return el.length > 4
//   })
//   return newArr
// }
