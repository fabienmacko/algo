function interleave() {
  let a = [];
  let b = 0;
  for (let i = 0; i < arguments.length; i++) {
    const p = arguments[i];
    if (p !== null) {
      if (p.length > b) {
        b = p.length;
      }
    }
  }
  for (let i = 0; i < b; i++) {
    for (let i2 = 0; i2 < arguments.length; i2++) {
      const v = arguments[i2];
      a.push(v[i]);
    };
  }

  return a;
}