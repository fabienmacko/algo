// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

const findOdd=(a)=>{
  var numbers = {};
  a.forEach((n)=>{
    if (numbers[n] !== undefined) {
      numbers[n] += 1;
    } else {
      numbers = {
        ...numbers,
        [n]: 1,
      }
    }
  });
  for (var key in numbers) {
    if (numbers[key] % 2 !== 0) {
        return parseInt(key);
    }
  }
}