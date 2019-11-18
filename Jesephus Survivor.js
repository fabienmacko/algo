function josephusSurvivor(n, k) {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  let i = 0;
  while (arr.length > 1) {

    for (let i2 = 0; i2 < k -1; i2++) {
      
      if (i === arr.length -1) {
        i = 0;
      } else {
        i++;
      }
    }
    arr.splice(i, 1);
    if (arr[i] === undefined) {
      i = 0;
    }
  };
  return arr[0];
}
josephusSurvivor(7, 3);