//Write a function that implements a miniature stack-and-register-based programming language

let register = 0;
let stack = [];

function miniLang(string) {
  let split = string.split(' ');
  for (let idx = 0; idx < split.length; idx++) {
    operations(split[idx]);
  }
}

// eslint-disable-next-line max-lines-per-function
function operations(word) {
  if (Number.isInteger(word * 1)) {
    register = Number(word);
  } else if (word.toLowerCase() === 'print') {
    console.log(register);
  } else if (word.toLowerCase() === 'add') {
    register += stack.pop();
  } else if (word.toLowerCase() === 'push') {
    stack.push(register);
  } else if (word.toLowerCase() === 'sub') {
    register -= stack.pop();
  } else if (word.toLowerCase() === 'mult') {
    register *= stack.pop();
  } else if (word.toLowerCase() === 'div') {
    register /= stack.pop();
  } else if (word.toLowerCase() === 'remainder') {
    register %= stack.pop();
  } else if (word.toLowerCase() === 'pop') {
    register = stack.pop();
  }
}

miniLang('PRINT');
// 0

miniLang('5 PUSH 3 MULT PRINT');
// 15

miniLang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

miniLang('5 PUSH POP PRINT');
// 5

miniLang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

miniLang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

miniLang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

miniLang('-3 PUSH 5 SUB PRINT');
// 8

miniLang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)