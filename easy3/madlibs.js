/*Create a simple madlib program that prompts
for a noun, a verb, an adverb, and an adjective,
and injects them into a story that you create.*/

const rdln = require('readline-sync');

console.log('Choose a singular noun');
let noun = rdln.question();

console.log('Choose a verb');
let verb = rdln.question();

console.log('Choose an adverb');
let adverb = rdln.question();

console.log('Choose an adjective');
let adjective = rdln.question();

let phrase = `The ${noun} from Paris ${verb} while taking the ${adjective} car for a drive ${adverb}`;

console.log(phrase);
