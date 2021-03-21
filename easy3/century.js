/*Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century 
number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

//Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"*/

function append(century) {
  if (century % 10 === 1 && century % 100 !== 11) {
    return century + 'st';
  } else if (century % 10 === 2 && century % 100 !== 12) {
    return century + 'nd';
  } else if (century % 10 === 3 && century % 100 !== 13) {
    return century + 'rd';
  } else {
    return century + 'th';
  }
}

function calculateCentury(year) {
  if (year % 100 === 0) {
    return append(Math.floor(year / 100));
  }
  return append(Math.floor((year / 100) + 1));
}

console.log(calculateCentury(2001));
console.log(calculateCentury(256));
console.log(calculateCentury(2000));
console.log(calculateCentury(200));
console.log(calculateCentury(1965));
console.log(calculateCentury(5));
console.log(calculateCentury(10103));
console.log(calculateCentury(1052));
console.log(calculateCentury(1127));
console.log(calculateCentury(11201));