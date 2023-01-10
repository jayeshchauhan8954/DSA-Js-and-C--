const prompt = require("prompt-sync")()

let n = parseInt(prompt("Give no. till you want to print sum: "))

let sum=0;

for(let i=0; i<=n; i++){
    sum = sum +i;
}
console.log(sum);