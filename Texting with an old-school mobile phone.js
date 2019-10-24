const sendMessage = msg => {
  var encodedMessage = "";
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var numbersCode = ["0-","1-","2-","3-","4-","5-","6-","7-","8-","9-"];
  var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
  var lettersCode = [];
  var specials = (".,?!'-+= *#").split("");
  var specialsCode = ["1","11","111","1111","*","**","***","****","0","*-","#-"];
  for (let i = 2; i < 10; i++) {
    let iterationNumber = i == 7 || i == 9 ? 5 : 4;

    for (let i2 = 1; i2 < iterationNumber; i2++) {
      var code = "";
      
      for (let i3 = 0; i3 < i2; i3++) {
        code += i;
      }
      lettersCode.push(code);
    }
  }
  var splitedMsg = msg.split("");
  let upperMode = false;
  splitedMsg.forEach(char => {
    if (letters.includes(char)) {
      var indexOfLetter = letters.indexOf(char);
      if (upperMode) {
        encodedMessage += "#";
      }
      var encodedLetter = encodedMessage[encodedMessage.length - 1] == lettersCode[indexOfLetter][0] ? " " + lettersCode[indexOfLetter] : lettersCode[indexOfLetter];
      encodedMessage += encodedLetter;
      upperMode = false;
    }
    else if (numbers.includes(char)) {
      var indexOfNumber = numbers.indexOf(char);
      var encodedNumber = encodedMessage[encodedMessage.length - 1] == numbersCode[indexOfNumber][0] ? " " + numbersCode[indexOfNumber] : numbersCode[indexOfNumber];
      encodedMessage += encodedNumber;
    }
    else if (specials.includes(char)) {
      var indexOfSpecial = specials.indexOf(char);
      var encodedSpecial = encodedMessage[encodedMessage.length - 1] == specialsCode[indexOfSpecial][0] ? " " + specialsCode[indexOfSpecial] : specialsCode[indexOfSpecial];
      encodedMessage += encodedSpecial;
    }
    else if (char == char.toUpperCase()) {
      var indexOfMajLetter = letters.indexOf(char.toLowerCase()); 
      if (!upperMode) {
        encodedMessage += "#";
      }
      var encodedLetter = encodedMessage[encodedMessage.length - 1] == lettersCode[indexOfMajLetter][0] ? " " + lettersCode[indexOfMajLetter] : lettersCode[indexOfMajLetter];
      encodedMessage += encodedLetter;
      upperMode = true;
    }

  });

  return encodedMessage;
  
}
