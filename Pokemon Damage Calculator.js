const calculateDamage = (yourType, opponentType, attack, defense) => {

  var [fire, water, electric, grass] = ["fire", "water", "electric", "grass"]
  
  var badMatchups = [];
  var evenMatchups = [];
  var goodMatchups = [];

  switch (yourType) {
    case fire:
      goodMatchups.push(grass);
      badMatchups.push(water, fire);
      evenMatchups.push(electric);
      break;
    case water:
      goodMatchups.push(fire);
      badMatchups.push(grass, electric, water);
      break;
    case grass:
      goodMatchups.push(water);
      badMatchups.push(fire, grass);
      evenMatchups.push(electric);
      break;
    case electric:
      goodMatchups.push(water);
      badMatchups.push(electric)
      evenMatchups.push(fire, grass);
      break;

    default:
      break;
  }

  var effectiveness;

  if (badMatchups.includes(opponentType)) {
    effectiveness = 0.5;
  }
  if (evenMatchups.includes(opponentType)) {
    effectiveness = 1;
  }
  if (goodMatchups.includes(opponentType)) {
    effectiveness = 2;
  }

  var damage = 50 * (attack / defense) * effectiveness;
  
  return damage;
}