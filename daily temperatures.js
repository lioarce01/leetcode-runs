const dailyTemperatures = (temperatures) => {
  const temps = temperatures;
  const n = temps.length;
  let stack = [];
  let result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
