const validParentheses = p => {
   let open = 0;
   for (let i = 0; i < p.split("").length; i++) {
     const e = p.split("")[i];
     if (e === "(") {
      open++;
     } else if (e === ")" && open != 0) {
      open--;
     } else if (e === ")" && open === 0) {
       return false;
     }
   }
   return open === 0;
}
