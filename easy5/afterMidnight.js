/*The time of day can be represented as the number of minutes before
or after midnight. If the number of minutes is positive, the time
is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based
format and returns the time of day in 24 hour format (hh:mm).
Your method should work with any integer input.*/

// eslint-disable-next-line max-lines-per-function
function timeOfDay(minutes) {
  let hour = String(Math.floor(minutes / 60));
  let minute = String(Math.floor((minutes / 60) % 1 * 60));

  if (minutes > 1440 && minutes < 2880) {
    let plusMinutes = minutes - 1440;
    hour = String(Math.floor(plusMinutes / 60));
    minute = String(Math.floor((plusMinutes / 60) % 1 * 60));
  }

  if (minutes > 2880 && minutes < 4320) {
    let plusPlusMinutes = minutes - 2880;
    hour = String(Math.floor(plusPlusMinutes / 60));
    minute = String(Math.floor((plusPlusMinutes / 60) % 1 * 60));
  }

  if (minutes < 0 && minutes > -1440) {
    let negatives = minutes + 1440;
    hour = String(Math.floor(negatives / 60));
    minute = String(Math.floor((negatives / 60) % 1 * 60));
  }

  if (hour < '10') {
    hour = '0' + hour;
  }
  if (minute < '10') {
    minute = '0' + minute;
  }
  return hour + ':' + minute;
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));

/*console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");*/