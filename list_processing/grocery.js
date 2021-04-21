/*Write a function that takes a grocery list (a two-dimensional array) with
each element containing a fruit and a quantity, and returns a one-dimensional
array of fruits, in which each fruit appears a number of times equal to its quantity.*/

//Solution #1:
function buyFruit(array) {
  let itemTotal = [];
  array.forEach(element => {
    for (let idx = 0; idx < element[1]; idx++) {
      itemTotal.push(element[0]);
    }
  });
  return itemTotal;
}

//Solution #2:
function buyFruit1(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
console.log(buyFruit1([['apple', 3], ['orange', 1], ['banana', 2]]));

// returns ["apple", "apple", "apple", "orange", "banana", "banana"]