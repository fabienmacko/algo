var moveZeros = function (arr) {
  var zeros = 0;
  var newArray = arr;
  var i = 0;
  while (newArray.includes(0)) {
    var n = newArray[i]
    if (n === 0) {
      zeros++;
      newArray.splice(i, 1);
    } else {
      i++;
    }
  }
  for (let i2 = 0; i2 < zeros; i2++) {
    newArray.push(0); 
  }

  return newArray;
}