/*Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that
are lowercase letters, one representing the number of characters that are
uppercase letters, and one representing the number of characters that are neither.*/

/*loop over string
decide if character is lower case
create a key within a new object
if the key is present the value should be incremented by one
if the key is not present the value should be set to 0*/

function letterCaseCount(string) {
  let count = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] >= 'A' && string[idx] <= 'Z') {
      count.uppercase += 1;
    } else if (string[idx] >= 'a' && string[idx] <= 'z') {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
  }
  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }