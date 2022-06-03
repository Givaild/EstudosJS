function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score >= 0 && score < 60;

  let scorefinal;

  if (scoreA) {
    scorefinal = "A";
  } else if (scoreB) {
    scorefinal = "B";
  } else if (scoreC) {
    scorefinal = "C";
  } else if (scoreD) {
    scorefinal = "D";
  } else if (scoreF) {
    scorefinal = "F";
  } else {
    scorefinal = "Nota inválida";
  }
  return scorefinal
}

console.log(getScore(-1))
console.log(getScore(200))
console.log(getScore(10))
console.log(getScore(61))
console.log(getScore(71))
console.log(getScore(81))
console.log(getScore(91))
