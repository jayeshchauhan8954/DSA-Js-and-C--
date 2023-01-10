const prompt = require("prompt-sync")();

let n = parseInt(prompt("Give me a number to check it is prime or not: "));
let isPrime = true;
if(n==1){
    console.log(`${n} is not a prime number nor a composite number.`);
    }else if(n>1){
        for(let i=2; i<n; i++ ){
            if(n%i==0){
                isPrime = false;
                break;
        }
        }
        if(isPrime== true){
            console.log(`${n} is the prime number.`);
        }else{
            console.log(`${n} is not the prime number.`);

        }
    }else{
        console.log(`${n} is not a prime number.`)
    }