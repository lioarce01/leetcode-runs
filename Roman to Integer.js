const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let result = 0;

  //recorre  la cadena de forma inversa
  for (let i = 0; i < s.length - 1; i++) {
    //si el valor actual es menor que el valor siguiente
    if (romanHash[s[i]] < romanHash[s[i + 1]]) {
      // resta el valor actual de result
      result -= romanHash[s[i]];
    } else {
      //sino suma el valor actual a result
      result += romanHash[s[i]];
    }
  }

  //retorna result + el valor del ultimo caracter

  return result + romanHash[s[s.length - 1]];
};

console.log(romanToInt("III"));
console.log(romanToInt("MCMXCIV"));
