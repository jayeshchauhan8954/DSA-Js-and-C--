const prompt = require("prompt-sync")();

let n = (prompt("Give the number till where you want to print : "));

for(let i = 1; i<=n; i++){
    console.log(i);
}