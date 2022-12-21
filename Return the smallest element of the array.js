function solution(A) {
    var ans = A[0];
    for (i = 0; i < A.length; i++) {
        if (ans > A[i]) {
            ans = A[i];
        }
    }
    return ans;
}

console.log(solution([1, 2, 3]))
console.log(solution([-1, -2, -3]))
console.log(solution([-1, -2, -3, 1, 2, 3]))
