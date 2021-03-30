/*Write a function that counts the number of occurrences of each
element in a given array. Once counted, log each element alongside
the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let object = {};
  for (let idx = 0; idx < array.length; idx++) {
    if (!object[array[idx]]) {
      object[array[idx]] = 0;
    }

    object[array[idx]] += 1;
  }
  log(objobj
}

function log(obj) {
  for (let item in obj) {
    console.log(`${item} => ${obj[item]}`);
  }
}

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2*/