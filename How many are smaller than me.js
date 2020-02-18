const smaller = nums => {

  var result = [];

  nums.forEach((e,i) => {
    var occ = 0;
    for (let i2 = i; i2 < nums.length; i2++) {
      const n = nums[i2];
      if (n < e) {
        occ++;
      }
    }
    result.push(occ);
  });

  return result;
}