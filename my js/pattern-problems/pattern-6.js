// const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me a number: "));

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    document.write("*");
  }
  document.write("<br/>");
}

// expected output
// if n= 4
// *
// * *
// * * *
// * * * *
