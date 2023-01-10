const prompt = require('prompt-sync')();

let n = parseInt(prompt("Give the number till you want to print even numbers: "));

for(let i=2; i<=n; i++){
    if(i%2==0){
        console.log(`${i} is the even number.`)
    }
}