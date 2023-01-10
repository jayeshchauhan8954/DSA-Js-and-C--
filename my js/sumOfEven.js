const prompt = require("prompt-sync")();

let n = parseInt(
  prompt("Give me a number till when you want sum of even numbers : ")
);
let sum = 0;
let i = 2;
while (i <= n) {
  if (i % 2 == 0) {
    sum += i;
  }
  i++;
}
console.log(`The sum of ${n} even numbers is ${sum}`);
