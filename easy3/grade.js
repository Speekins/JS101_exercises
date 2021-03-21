/*Write a function that determines the mean (average) of the
three scores passed to it, and returns the letter associated with that grade.*/

function getGrade(g1, g2, g3) {
  let meanGrade = (g1 + g2 + g3) / 3;
  switch (true) {
    case meanGrade >= 90 && meanGrade <= 100: return 'A';
    case meanGrade >= 80 && meanGrade < 90: return 'B';
    case meanGrade >= 70 && meanGrade < 80: return 'C';
    case meanGrade >= 60 && meanGrade < 70: return 'D';
    default: return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(58, 55, 65));    // "F"