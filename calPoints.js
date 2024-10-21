const calPoints = (operations) => {
  let scores = [];

  operations.forEach((e, i) => {
    if (e !== "C" && e !== "D" && e !== "+") {
      scores.push(parseInt(e));
    } else if (e === "C") {
      scores.pop();
    } else if (e === "D") {
      scores.push(scores[scores.length - 1] * 2);
    } else {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    }
  });

  return scores.reduce((acc, curr) => acc + curr, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
