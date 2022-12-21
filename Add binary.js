var addBinary = function(a, b) {
    if(a == "" ) return b;
    if(b == "") return a;
    if(a.length > b.length) return addBinary(b,a);
    var strArr = [];
    var carry = "0";
      for(var i = 0; i < b.length; i++){
        var aChar = i < a.length ? a.charAt(a.length-1-i) : '0';
        var bChar = b.charAt(b.length-1-i);
        var curr;
          if(aChar != bChar){
            curr = carry == '1'? '0' :'1';
          } else {
            curr = carry;
            carry = aChar;
          }
        strArr.unshift(curr);
      }

    if(carry == '1') strArr.unshift(carry);
    
    return strArr.join("");
};

// console.log(addBinary("11", "1"))
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"))