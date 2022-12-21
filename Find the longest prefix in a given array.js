function solution(X, Y, A) {
  var N = A.length;
  var result = -1;
  var nX = 0;
  var nY = 0;
  for (var i = 0; i < N; i++) {
      if (A[i] == X)
          nX += 1;
      else if (A[i] == Y)
          nY += 1;
      if ((nX == nY) && (nX != 0 && nY != 0))
          result = i;
  }
  return result;
}

console.log(solution(100, 63, [100, 63, 1, 6, 2, 13]))
console.log(solution(-100, -63, [100, 63, 1, 6, 2, 13]))
console.log(solution(7, 42, [6, 42, 11, 7, 1, 42]))
console.log(solution(6, 13, [12, 14, 1, 1]))