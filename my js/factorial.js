const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me to number to find its factorial: "));

let sum = 1;
if (n < 0) {
  console.log(
    `Factorial of ${n} is not possible because it is negative number.`
  );
} else if (n > 0) {
  for (let i = n; i > 1; i--) {
    sum = i * sum;
  }
  console.log(`The factorial of ${n} is ${sum}`);
} else {
  console.log(`The factorial of ${n} is ${sum}`);
}
