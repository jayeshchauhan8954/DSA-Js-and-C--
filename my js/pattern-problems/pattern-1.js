// const prompt = require("prompt-sync")();

let n = parseInt(
  prompt("Number of column till which you want to print star: ")
);
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    document.write("*");
  }
  document.write("<br />");
}
