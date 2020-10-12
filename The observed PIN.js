// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we count on you!

function getCurrentPossibilites(number, pinTable) {

  var pinNumber = number;
  var pinRow = 0;
  var pinIndex = 0;

  for (let i = 0; i < pinTable.length; i++) {
    const currentPinTableRow = pinTable[i];

    if (currentPinTableRow.indexOf(pinNumber) > -1) {
      pinRow = i;
      pinIndex = currentPinTableRow.indexOf(pinNumber);
    }
  }

  var currentNumberPossibilites = [];

  if (pinRow != 0) {
    currentNumberPossibilites.push(pinTable[pinRow - 1][pinIndex]);
  }
  currentNumberPossibilites.push(pinTable[pinRow][pinIndex - 1]);
  currentNumberPossibilites.push(pinTable[pinRow][pinIndex]);
  currentNumberPossibilites.push(pinTable[pinRow][pinIndex + 1]);
  console.log(pinRow);

  if (pinRow != 3) {
    currentNumberPossibilites.push(pinTable[pinRow + 1][pinIndex]);
  }

  return currentNumberPossibilites.filter((e) => e != 'x' && e != undefined);
}

function getPINs(observed) {

  var pinTable = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['x', '0', 'x']];
  var watchedCode = observed.split('');

  console.log('watched code: ' + watchedCode);


  // Get possibilites for each number, if there is more than one..

  if (watchedCode.length > 1) {
    var allPossibilitesForEachNumber = [];

    for (let i = 0; i < watchedCode.length; i++) {
      const possibilitiesForEachNumber = getCurrentPossibilites(watchedCode[i], pinTable);
      allPossibilitesForEachNumber.push(possibilitiesForEachNumber);
    }

    console.log(allPossibilitesForEachNumber);
  } else {
    var allPossibilitesForEachNumber = [];

    for (let i = 0; i < watchedCode.length; i++) {
      const possibilitiesForEachNumber = getCurrentPossibilites(watchedCode[i], pinTable);
      allPossibilitesForEachNumber.push(possibilitiesForEachNumber);
    }
    return [].concat.apply([], allPossibilitesForEachNumber);
  }

  // Test all combinaisons
  var allCombinaisons = [];

  // For each number possibilities
  for (let i = 0; i < allPossibilitesForEachNumber.length; i++) {
    
    for (let i2 = 0; i2 < allPossibilitesForEachNumber[i].length; i2++) {
      const element = allPossibilitesForEachNumber[i2];
      
    }
   
  }



  return allCombinaisons.filter((e) => e != 'x' && e != undefined);


}