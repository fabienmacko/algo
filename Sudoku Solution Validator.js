const isEqual = (a,b) =>
{
  if(a.length!=b.length) 
   return false; 
  else
  { 
   for(var i=0;i<a.length;i++) 
   if(a[i]!=b[i]) 
    return false; 
    return true; 
  } 
}

const findDuplicates = arr => {
  let sorted_arr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

const findError = square => {

  for (let i = 0; i < square.length; i++) {
    const e = square[i];
    if (findDuplicates(e).length > 0 || e.includes(0) || findDuplicates([].concat.apply([], square)).length > 0) {
      return false;
    } else {
      for (let i2 = 0; i2 < e.length; i2++) {

        const e2 = e[i2];

        for (let i3 = 0; i3 < square.length; i3++) {
        
          
          const e3 = square[i3][i2];
          if (e3 === e2 && !isEqual(square[i3], e)) {
            return false;
          };

        }
      }
    }
  }
  return true;
}

const validSolution = board => {
  for (let i4 = 0; i4 < 9; i4+=3) {
    const firstRow = board[i4];
    const secondRow = board[i4+1];
    const thirdRow = board[i4+2];
    for (let i5 = 0;  i5 < 9; i5+=3) {
      const firstArray = [firstRow[i5], firstRow[i5+1], firstRow[i5+2]];
      const secondArray = [secondRow[i5], secondRow[i5+1], secondRow[i5+2]];
      const thirdArray = [thirdRow[i5], thirdRow[i5+1], thirdRow[i5+2]];
  
      const square = [firstArray,
        secondArray,
        thirdArray]
      if (!findError(square)) {
        return false;
      }
    }
  }
  return true;
}