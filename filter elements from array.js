const filter = (arr, fn) => {
  const filteredArray = [];

  arr.forEach((e, i) => {
    if (fn(e, i)) {
      filteredArray.push(e);
    }
  });

  return filteredArray;
};

console.log(filter([0, 10, 20, 30], (n) => n > 10));
console.log(filter([1, 2, 3], (n, i) => i === 0));
