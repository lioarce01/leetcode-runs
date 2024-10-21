const isValid = (s) => {
  let stack = [];

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("([])"));
console.log(isValid("(]"));
