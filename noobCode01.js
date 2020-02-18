const superSize = num => parseInt(num.toString().split("").map(n => parseInt(n)).sort((a,b) => b-a).join(""));
