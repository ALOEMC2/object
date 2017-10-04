function countLetters (stringPhrase) {
var letterCounter = {}

 var count = 0
  var splitString = stringPhrase.replace(/\s+/g, "").split('');

 for (var i = 0; i < splitString.length; i++){
    var char = splitString[i];
    count = letterCounter[char];
    letterCounter[char] = count ? count + 1 : 1;
  }
  return letterCounter;
}

console.log(countLetters('lighthouse in the house'));