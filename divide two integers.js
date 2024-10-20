const divide = (dividend, divisor) => {
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  return (dividend / divisor) << 0;
};

console.log(divide(10, 3)); //output 3
