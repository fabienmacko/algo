const sum = num => parseInt(num.toString().split("").map(num2 => parseInt(num2)).reduce((a,b) =>a+b));
const digital_root = n => n.toString().length === 1 ? n : digital_root(sum(n));