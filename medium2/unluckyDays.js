/*Write a function that takes a year as an argument and returns the 
number of Friday the 13ths in that year. You may assume that the 
year is greater than 1752, which is when the United Kingdom adopted t
he modern Gregorian Calendar. You may also assume that the same calendar 
will remain in use for the foreseeable future.*/

function fridayThe13ths(year) {
  let thirteenths = [];
  let fridays = 0;
  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  thirteenths.forEach(day => {
    if (day.getDay() === 5) {
      fridays += 1;
    }
  });
  return fridays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2