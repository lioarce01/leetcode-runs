const isSubsequence = (s, t) => {
  let p1 = 0;
  let p2 = 0;

  //recorremos la cadena t
  while (p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++; //si hay coincidencia avanzamos en s
    }
    p2++; //avanzamos en t siempre

    //si el puntero 1 es igual a la longitud de la primer cadena
    //la primer cadena es subsecuencia de la segunda
    if (p1 === s.length) {
      return true;
    }
  }

  //si terminamos el cilo y el puntero 1 no es igual a la longitud
  //de s, no es subsecuencia y devuelve false.
  return p1 === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
