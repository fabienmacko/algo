// If you're old enough, you might remember buying your first mobile phone, one of the old ones with no touchscreen, and sending your first text message with excitement in your eyes. Maybe you still have one lying in a drawer somewhere.

// Let's try to remember the good old days and what it was like to send text messages with such devices. A lot of them had different layouts, most notably for special characters and spaces, so for simplicity we'll be using a fictional model with 3x4 key layout shown below:

// -------------------------
// |   1   |   2   |   3   |  <-- hold a key to type a number
// |  .,?! |  abc  |  def  |  <-- press a key to type a letter
// -------------------------
// |   4   |   5   |   6   |
// |  ghi  |  jkl  |  mno  |
// -------------------------
// |   7   |   8   |   9   |
// |  pqrs |  tuv  |  wxyz |
// -------------------------
// |   *   |   0   |   #   |  <-- hold for *, 0 or #
// |  '-+= | space |  case |  <-- press # to switch between upper/lower case
// -------------------------
// Aside: generally, using * would bring up a list with other special characters, but to keep it simple we'll only use a few - '-+= - and not worry about the rest.

// The task
// You got your thumb ready to go, so you'll receive a message and your job is to figure out which keys you need to press to write the message with the lowest number of clicks possible. Return the result as a string of key inputs.

// Carefully study the rules, special cases and examples provided below.

// How it works
// Inputs that should be put in the resulting string are shown at the top row of a key layout.
// To type numbers 0-9 and special characters *# - hold that key. Holding is respresented by a number, followed by a dash (type 5- to output number 5).
// To type letters, press a button repeatedly to cycle through the possible characters that are provided in the bottom row of a key layout. Pressing is represented by key number repeated n times, where n is the position of character on that particular key (type 5 for letter j, 9999 for z, 111 for ?, ** for -).
// To toggle between lowercase and uppercase letters, use the # symbol. At the start of the message, default case is lowercase. You should switch case only when the next character has different case. Note that non-alphabet characters are not case sensitive and should be ignored when considering case-switching (#222 for letter C. Note that you'll have to use # again to switch back to lowercase later on. A-z should be handled as #2**#9999).
// If you have multiple letters in a row that sit on the same key, you have to wait before pressing the same key again. Waiting is represented by adding a space between 2 (or more) such letters (to type hihi, press 44 444 44 444). However, you shouldn't wait after switching case or after holding a key, even if next character in on the same key.
// Aside: typing 0 can be done either by holding it, or pressing it twice. However, the requirement is to have the least keypresses, so stick to holding keys to output characters on top row.

// Example
// To illustrate how this works, let's go over an example. Say you want to type this message - 'Def Con 1!':

// Switch to uppercase with # and press 3 (#3 = D)
// Switch to lowercase and press 3 twice (#33 = e). Note that even though those 2 letters are on the same key, you have to switch case between them, so you don't have to wait.
// Next letter is on number 3 again, and is also lowercase, so you have to wait to type again (' 333' = f).
// In a similar manner type the second word (space is located on number 0).
// Finish off by holding 1 as 1- and typing ! as 1111 ('1-1111' = 1!). Note that after holding a key you don't need to wait to press another key.
// Result: sendMessage("Def Con 1!") => "#3#33 3330#222#666 6601-1111"

// More examples are provided in sample test suite.

// All inputs will be valid strings and only consist of characters from the key layout table.

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
