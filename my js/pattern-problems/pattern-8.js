// const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me a number: "));

let count = 1;
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    document.write(count + " ");
    count++;
  }
  document.write("<br/>");
}

// expected output
// if n= 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
