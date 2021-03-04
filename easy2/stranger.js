/*Create a function that takes 2 arguments, an array and an object.
The array will contain 2 or more elements that, when combined with
adjoining spaces, will produce a person's name. The object will
contain two keys, "title" and "occupation", and the appropriate values.
Your function should return a greeting that uses the person's full name, and mentions the person's title.*/

let nameArray = ['Gary', 'B', 'Garrison'];

let credentials = {
  title: 'doctor',
  occupation: 'proctology'
};

function greetings(array, object) {
  let name = array.join(' ');
  return `Hello, ${name}! It's nice to meet a ${object.title} of ${object.occupation}.`;
}

console.log(greetings(nameArray, credentials));