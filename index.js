// Iteration 1: Names and Input
const hacker1 = "Julien";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "julion";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The ${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else {
  console.log(
    `The ${hacker2} has the longest name, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops
let result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i] + " ";
}

console.log(result.toUpperCase());

let inverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  inverse += hacker2[i];
}
console.log(inverse);

let name1 = hacker1.toUpperCase();
let name2 = hacker2.toUpperCase();

if (name1 < name2) {
  console.log(`The ${hacker1} goes first.`);
} else if (name1 > name2) {
  console.log(`Yo, ${hacker2} goes first, definitely.`);
} else {
  console.log("What?! You both have the same name?");
}
//
// let namearray = [name1, name2]

// for (let j = 0; j<namearray.length; j++) {
// if (condition) {

// }

// }
