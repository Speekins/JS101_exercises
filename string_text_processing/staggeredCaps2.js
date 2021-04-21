/*Modify the function from the previous exercise so it ignores
non-alphabetic characters when determining whether it should
uppercase or lowercase each letter. The non-alphabetic
characters should still be included in the return value;
they just don't count when toggling the desired case.*/

//Solution #1:
function staggeredCase(string) {
  let strArr = string.toLowerCase().split('');
  let count = 0;
  for (let idx = 0; idx < strArr.length; idx++) {
    if (strArr[idx] >= 'a' && strArr[idx] <= 'z') {
      if (count % 2 === 0) {
        strArr[idx] = strArr[idx].toUpperCase();
      }
      count++;
    }
  }
  return strArr.join('');
}

//Solution #2:
function staggeredCase1(string) {
  let capitalize = true;

  return string
    .toLowerCase()
    .split('')
    .map(elem => {
      if (elem >= 'a' && elem <= 'z') {
        if (capitalize) {
          capitalize = false;
          return elem.toUpperCase();
        } else {
          capitalize = true;
          return elem;
        }
      } else {
        return elem;
      }
    })
    .join('');
}

console.log(staggeredCase1("I Love Launch School!"));
console.log(staggeredCase1("ALL CAPS"));
console.log(staggeredCase1("ignore 77 the 444 numbers"));