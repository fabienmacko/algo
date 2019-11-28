
function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}
function wordsToMarks(string){

var alphabet = genCharArray('a', 'z');
  
var points = 0;

for (let i = 0; i < string.split("").length; i++) {
  const letter = string.split("")[i];
  points += alphabet.indexOf(letter) + 1;
}

return points;
  
}