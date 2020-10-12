function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

function leaderboardSort(leaderboard, changes) {
  var result = leaderboard;

  var math_it_up = {
    '+': (x, y) => x - y,
    '-': (x, y) => x + y
  };

  changes.forEach(change => {
    var name = change.split(" ")[0];
    var score = change.split(" ")[1];
    var indexOf = result.indexOf(name);
    var operator = score[0];
    console.log(name, score, indexOf, operator);
    console.log(math_it_up[operator](indexOf, parseInt(score.slice(1))));

    array_move(result, indexOf, math_it_up[operator](indexOf, parseInt(score.slice(1))));
  });

  return result;
}