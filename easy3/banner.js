//Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(phrase) {
  let horizontalRule = `+${'-'.repeat(phrase.length + 2)}+`;
  let emptyLine = `|${' '.repeat(phrase.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${phrase} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before');