const isPalindrome = (s) => {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(str);

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;

    left++;
    right--;
  }

  return true;

  //   const reg = /[A-Za-z0-9]/;
  //   let left = 0;
  //   let right = s.length - 1;

  //   while (left < right) {
  //     if (!reg.test(s[left])) {
  //       left++;
  //       continue;
  //     }
  //     if (!reg.test(s[right])) {
  //       right--;
  //       continue;
  //     }

  //     if (s[left].toLowerCase() === s[right].toLowerCase()) {
  //       left++;
  //       right--;
  //       continue;
  //     }
  //     return false;
  //   }

  //   return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
