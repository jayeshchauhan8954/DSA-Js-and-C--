// const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me a number: "));

// let count = 1;
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    document.write(row);
  }
  document.write("<br/>");
}

// expected output
// if n = 7
1;
22;
333;
4444;
55555;
666666;
7777777;
