/*Write a function that takes two strings as arguments, determines the longer of the two strings,
and then returns the result of concatenating the shorter string, the longer string, and
the shorter string once again. You may assume that the strings are of different lengths.*/

let string1 = 'i like big buttes and i cannot lie.';
let string2 = `where there's a will there's a way.`;
let string3 = 'i have a dream';
let string4 = 'was i too hungry for the truth to find you';

function concat(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return 'both strings are the same length!';
  }
}

console.log(concat(string1, string2));

console.log(concat(string3, string4));
