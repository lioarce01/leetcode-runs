var isValid = function(s) {
  s.split("")
  let arr = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") 
      arr.push(")")
    else if (s[i] === "{") 
      arr.push("}")
    else if (s[i] === "[") 
      arr.push("]")
    else if(s.length === 0 || arr[arr.length - 1] !== s[i] ) 
      return false;
    else arr.pop()
  }

  return arr.length === 0
};

console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("{[]}"))