var reverseString = function (s) {
  const n = s.length;
  const res = new Array(n);

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return res;

  //or s.reverse()
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
