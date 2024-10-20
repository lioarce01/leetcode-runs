const mergeAlternately = (word1, word2) => {
  let result = "";

  //recorre hasta la longitud mas larga de las dos palabras
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    //is i es menor que la longitud e la primer palabra, se agrega el caracter
    if (i < word1.length) {
      result += word1[i];
    }

    //si i es menor que la longitud de la segunda palabra, se agrega el caracter
    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
};

console.log(mergeAlternately("abc", "pqr"));
