var plusOne = function(digits) {
  
  // let number = BigInt(digits.join(""))
  
  // let nextN = number + BigInt(1)

  // return nextN.toString().split("")

  return (BigInt(digits.join("")) + BigInt(1)).toString().split("")
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))