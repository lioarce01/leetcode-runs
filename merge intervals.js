const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];

    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(currInterval[1], prev[1]);
    } else {
      merged.push(prev);
      prev = currInterval;
    }
  }
  merged.push(prev);

  return merged;
};

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); //output [[1,5]]
