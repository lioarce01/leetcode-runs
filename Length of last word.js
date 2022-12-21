var lengthOfLastWord = function(s) {

  return s.trim().split(" ").at(-1).length
  
};

console.log(lengthOfLastWord("luffy is still joyboy"))