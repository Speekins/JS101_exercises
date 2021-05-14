/*Write a function that takes a string and returns an object containing the following three properties
Uppercase letters, lowercase letters, and characters that qualify as neither.*/

function letterPercentages(string) {
  let percent = { lower: 0, upper: 0, neither: 0 };
  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      percent['lower'] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      percent['upper'] += 1;
    } else {
      percent['neither'] += 1;
    }
  });
  return calculatePercent(percent, string);
}

function calculatePercent(object, string) {
  for (let key in object) {
    object[key] = (object[key] / string.length * 100)
      .toFixed(2)
      .toString();
  }
  return object;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
