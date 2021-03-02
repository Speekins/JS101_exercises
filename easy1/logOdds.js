//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

for (let i = 0; i < 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

let i = 1;
while (i <= 99) {
  if (Math.abs(i) % 2 === 1) {
    console.log(i);
  }
  i++;
}