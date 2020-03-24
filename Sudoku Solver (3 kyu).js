const sudoku = board => {
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
        console.log(square);
    }
  }
}