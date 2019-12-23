const findChildren = (sl, cdr) =>  sl.filter((n) => cdr.includes(n)).sort().filter((item, i, s) => s.indexOf(item) == i);
