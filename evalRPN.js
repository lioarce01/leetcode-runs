const evalRPN = (tokens) => {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (token) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = Math.trunc(operand1 / operand2);
          break;
      }
      stack.push(result);
    }
  }

  return stack.pop();
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
console.log(evalRPN(["4", "13", "5", "/", "+"]));
