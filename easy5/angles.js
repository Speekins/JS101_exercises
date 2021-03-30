/*Write a function that takes a floating point number representing
an angle between 0 and 360 degrees, and returns a string representing
that angle in degrees, minutes, and seconds. You should use a
degree symbol (˚) to represent degrees, a single quote (') to
represent minutes, and a double quote (") to represent seconds.
There are 60 minutes in a degree, and 60 seconds in a minute.*/

function dms(degree) {
  let whole = degree;
  let minute = Math.floor((whole % 1) * 60);
  let second = Math.floor((((degree % 1) * 60) % 1) * 60);
  if (degree > 360) {
    whole = (0 + (degree - 360));
  }
  if (degree < 0 && degree > -360) {
    whole = (360 + degree);
  }
  if (degree < -360 && degree > -720) {
    whole = 360 + (360 + degree);
  }
  if (degree < -720) {
    console.log('Sorry, that number will not work.');
  }
  console.log(`${Math.floor(whole)}˚${padZero(minute)}'${padZero(second)}"`);
}

function padZero(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

//EXAMPLES:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(400.3654);     // 40°21'55"
dms(-1);           // 359°00'00"
dms(-420);         // 300°00'00"