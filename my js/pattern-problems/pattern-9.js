// const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me a number: "));

for (let row = 1; row <= n; row++) {
  let count = row;
  for (let col = 1; col <= row; col++) {
    document.write(count + " ");
    count++;
  }
  document.write("<br />");
}

// expected output
// if n = 7
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
// 6 7 8 9 10 11
// 7 8 9 10 11 12 13
