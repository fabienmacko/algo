var wordBreak = function(s, wordDict) {
    
  const dictSet = new Set(wordDict);
  console.log(dictSet);
  
  const memo = {};

  function dfs(start) {
      
      if(start > s.length-1) { 
          return [[]];
      }
      
      if(memo[start] !== undefined) {
          return memo[start];
      }
      
      const out = [];
      
      for(let i = start; i < s.length; i++) {
          const substr = s.substring(start, i+1);
          if(dictSet.has(substr)) {
              let next = dfs(i+1); 
              for(let n of next) {
                  out.push([substr, ...n]);
              }
          }
      }  
      return memo[start] = out;
      
  }
  
  const res = dfs(0)

  return res.filter(a => a.join('') === s).map(a => a.join(' '));
};

wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])