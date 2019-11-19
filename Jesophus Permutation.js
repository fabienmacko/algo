function josephus(n, k) {
  var p = [];
  var a = n;
  let i = 0;
  while (a.length > 0) {
    for (let i2 = 0; i2 < k -1; i2++) {
      
      if (i === a.length -1) {
        i = 0;
      } else {
        i++;
      }
    }
    p.push(a[i]);
    a.splice(i, 1);
    if (a[i] === undefined) {
      i = 0;
    }
  };
  return p;
}