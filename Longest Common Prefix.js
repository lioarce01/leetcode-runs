var longestCommonPrefix = function (strs) {
  let pref = strs[0];
  let prefLength = pref.length;

  for (let i = 1; i < strs.length; i++) {
    let s = strs[i];

    while (pref !== s.substring(0, prefLength)) {
      prefLength--;

      if (prefLength === 0) return "";

      pref = pref.substring(0, prefLength);
    }
  }

  return pref;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*El prefijo inicial es "flower".
Comparamos "flower" con "flow". El prefijo se reduce a "flow".
Comparamos "flow" con "flight". El prefijo se reduce a "fl".
No hay más cadenas para comparar. El prefijo común es "fl".*/
