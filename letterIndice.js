// function countLetters (stringPhrase) {
//   var letterCounter = {}

//   var count = 0
//   var splitString = stringPhrase.split(" ").join("");

//  for (var i = 0; i < splitString.length; i++){
//     var char = splitString[i];
//     count = letterCounter[char];

//     letterCounter[char] = count ? count + 1 : 1;
//   }console.log(char,i)
//   return letterCounter;
// }
function charPositioning (stringPhrase){
var charPosition = {}
  //var splitString = stringPhrase.replace(/\s+/g, "").split('');
  var splitString = stringPhrase.split(" ").join("");
  var positions = [];
  for (var i = 0; i < splitString.length; i++){
    if(splitString[i] in charPosition){ //if the current position is a key in the char position
      charPosition[splitString[i]].push(i)
    }else{
      charPosition[splitString[i]] = [i];
    }
  }
  return charPosition
}
console.log(charPositioning('lighthouse in the house'));













