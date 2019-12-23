function mostMoney(students) {
  var mostMoney;
  var currentMoney = 0;
  var same = 0;
  students.forEach(({ name, fives, tens, twenties }) => {

    var five = 5 * fives;
    var ten = 10 * tens;
    var twenty = 20 * twenties;
    var total = five+ten+twenty;
    if (total > currentMoney) {
      currentMoney = total;
      mostMoney = name;
    }
    if (total === currentMoney) {
      same++;
    }
  });


  return same === students.length ? "all" : mostMoney;
}