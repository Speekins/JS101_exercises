/*We were asked to implement a task list and the following functionality:

adding a new task
completing a given number of existing tasks
displaying the task list
We decided to keep things simple and model the tasks as strings. Completing a task for us simply means deleting the string from the array of tasks.

Experimenting with our code reveals that it doesn't work exactly as we expected. Find the problem and fix it.*/

/*SOLUTION: On line 28 (see below), instead of using 'delete', use the Array.shift() method. Using 'delete'
will remove the element and leave a blank space in its place.The length of the array remains the same, and 
using bracket notation with the deleted item's index will return undefined. Using delete with an array 
can therefore lead to unexpected results and should generally be avoided. Array.splice() can also be used.
*/

let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget', 'call plumber', 'feed fido', 'get gas', 'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();