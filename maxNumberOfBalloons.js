const maxNumberOfBalloons = (text) => {
  const balloon = "balloon";
  const map = new Map();

  for (let char of text) {
    if (balloon.includes(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  //si el map no tiene alguno de los char de ballon, retorna 0
  for (char of balloon) {
    if (!map.has(char)) return 0;
  }

  //sino se calcula el minimo de los valores de los char de balloon
  //diviendo por 2 el valor de la "l" y de "o"
  //porque hay 2 "l" y 2 "o" en un balloon
  return Math.floor(
    Math.min(
      map.get("b"),
      map.get("a"),
      map.get("l") / 2,
      map.get("o") / 2,
      map.get("n")
    )
  );
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("balon"));
