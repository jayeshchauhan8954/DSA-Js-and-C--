// const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me a number: "));
let count = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    document.write(count + " ");
    count++;
  }
  document.write("<br/>");
}
