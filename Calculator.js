const Calculator = function () {
  this.operators = {
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.evaluate = string => {
    let ss = string.split(" ");
    for (let i = 0; i < ss.length; i++) {
      const e = ss[i];
      if (e === "/" || e === "*") {
        const f = typeof ss[i - 1] === "string" ? parseInt(ss[i - 1]) : ss[i - 1];
        const s = typeof ss[i + 1] === "string" ? parseInt(ss[i + 1]) : ss[i + 1];
        let result = this.operators[e](f, s);
        ss.splice(i - 1, 3, result);
  
        i = i - 2;
      }
    }

    let res = [...ss];

    for (let i2 = 0; i2 < res.length; i2++) {
      const e = res[i2];
      if (e === "-" || e === "+") {
        const f = typeof res[i2 - 1] === "string" ? parseInt(res[i2 - 1]) : res[i2 - 1];
        const s = typeof res[i2 + 1] === "string" ? parseInt(res[i2 + 1]) : res[i2 + 1];
        let result = this.operators[e](f, s);
        res.splice(i2 - 1, 3, result);
        i2 = i2 - 2;
      }
    }
    return res[0];
  }
};