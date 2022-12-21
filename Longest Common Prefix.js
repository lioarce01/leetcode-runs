var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
    
  const first = strs[0];
  let response = ''; 
  let prefix = '';

  for (let i = 0; i < first.length; i++) {
    prefix += first[i];

    let find = strs.filter(s => s.startsWith(prefix))

    if (find.length === strs.length) {
      response = prefix;
    }
  }
  return response;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))