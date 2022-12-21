var isPalindrome = function(x) {
  let reversed = x.toString().split("").reverse().join("")
  console.log(reversed)

  return Number(reversed) === x
};

console.log(isPalindrome(121))
console.log(isPalindrome(122))
console.log(isPalindrome(-121))