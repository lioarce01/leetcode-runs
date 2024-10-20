const isPerfectSquare = (num) => {
  let sqrt = Math.sqrt(num);

  if (sqrt % 1 !== 0) {
    return false;
  }

  return sqrt * sqrt === num;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
