/*We have been asked to implement a function that determines whether
or not a given word is a reserved keyword. We wrote the isReserved
function below along with some test cases, but we aren't seeing the
expected result. Why not? Fix the code so that it behaves as intended.*/

/*SOLUTION: The .forEach method cannot be used because it will return "undefined" after it checks each array item.
Instead, use a for loop or .some() method. Likewise, .includes() will achieve the result 
we're looking for by returning the appropriate boolean value*/

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  return RESERVED_KEYWORDS.some(reserved => name === reserved);
}

/*function isReserved(name){
  return RESERVED_KEYWORDS.includes(name);
}
*/

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true