function solution(S) {
  // Implement your solution here
  if(typeof S != "string") return 0
  let moves = 0
  let chars = "BANANA"
  S = S.toUpperCase()

  for (let i = 0; i < S.length; i++) {
    chars = chars.replace(S[i], "")

    if (chars.length === 1) {
      moves++
      chars = "BANANA"
    }
  }

  return moves
}

console.log(solution("NAABXXAN"))
console.log(solution("NAANAAXNABABYNNBZ"))
console.log(solution("QABAAAWOBL"))
console.log(solution("NAANAAXNABABYNNBZNAANAAXNABABYNNBZ"))
console.log(solution("naabxxan"))
console.log(solution(4))