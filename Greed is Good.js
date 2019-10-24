// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

const score = dice => {
  var points = 0;
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;

  dice.forEach(number => {
    switch (number) {
      case 1:
          if (one === 3) {
            points += 1000;
            one = 0;
          }
        one++
      break;
      case 2:
          if (two === 3) {
            points += 200;
            two = 0;
          }
          two++
      break;
      case 3:
          if (three === 3) {
            points += 300;
            three = 0;
          }
          three++
      break;
      case 4:
          if (four === 3) {
            points += 400;
            four = 0;
          }
          four++
      break;
      case 5:
          if (five === 3) {
            points += 500;
            five = 0;
          }
          five++
      break;
      case 6:
        if (six === 3) {
          points += 600;
          six = 0;
        }
          six++
      break;
    
      default:

      break;
    }
  });

  if (one === 1) {
    points += 100;
  } else if (one === 2) {
    points += 200;
  }
  if (five === 1) {
    points += 50;
  } else if (five === 2) {
    points += 100;
  }
  if (two === 3) {
    points += 200;
  }
  if (three === 3) {
    points += 300;
  }
  if (four === 3) {
    points += 400;
  }
  if (five === 3) {
    points += 500;
  }
  if (six === 3) {
    points += 600;
  }
  if (one === 3) {
    points += 1000;
  }
  return points;
}