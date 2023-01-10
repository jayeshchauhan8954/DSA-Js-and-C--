const prompt = require('prompt-sync')();

let n = parseInt(prompt("Give the number till you want to print even numbers: "));
// let arr = [];
for(let i=1; i<=n; i++){
    if(i%2!==0){
        console.log(`${i} is the odd number.`);
    //   (arr.push(i));
    }
}
