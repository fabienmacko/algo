const permutations = (input) => {
  let inputArr = input.split("");
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0 && !result.includes(m.join(""))) {
      result.push(m.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}