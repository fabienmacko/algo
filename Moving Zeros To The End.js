const moveZeros = arr => {
  arr.forEach((e, i, a) => {
    if (e === 0) {
      a.splice(a.indexOf(e), 1);
      a.push(0);
    }
  });
  return arr;
}