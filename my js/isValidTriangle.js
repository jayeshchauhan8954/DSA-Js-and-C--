const prompt = require("prompt-sync")();

let a,b,c;
a = parseInt(prompt("Give the value of A : " ));
b = parseInt(prompt("Give the value of B : " ));
c = parseInt(prompt("Give the value of C : " ));

if(a+b>c && b+c>a && a+c>b){
    console.log("yes this is a valid triangle")
}else{
    console.log("yes this is not a valid triangle")

}