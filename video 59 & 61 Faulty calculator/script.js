/* Create a faulty calculator Using javascript

This faulty calculator does follow

1. it take two number as input from user
2. it perform wrong operation as follow

+ ----->-
* ----->+
- ----->/
/ ----->**

it perform wrong operation 10% of the time 


*/


let random=Math.random();
console.log("The random number is :",random);

let a=Number(prompt("Enter a First number :"));
let opern=prompt("Enter a operation :");
let b=Number(prompt("Enter a second number :"));

console.log("The First number is :",a);
console.log("The second number is :",b);
console.log("The operation is :",opern);


let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if(random>0.1){
    // correct operation

    console.log(`The result is: ${a} ${opern} ${b}`);
    alert(`The result is : ${eval(`${a} ${opern} ${b}`)}`);

    
}
else{
    // wrong operation 
    opern=obj[opern];
    console.log(`Wrong operation applied. New operation: ${opern}`);
    alert(`The result is : ${eval(`${a} ${opern} ${b}`)}`);
}








































/*
alert("Namaste Duniya :");

let a=Number(prompt("Enter a first number :"));
let b=Number(prompt("Enter a second number :"));

// Convert string inputs to numbers

// a = Number(a);
// b = Number(b);



console.log("The first number is :",a);
console.log("The second number is :",b);

let sum=a+b;
console.log("The sum of the two number is :",sum);

let sub=a-b;
console.log("The subtraction is :",sub);

let mul=a*b;
console.log("The multiplication of the two number is :",mul);

let div=a/b;
console.log("The divission of the two number is :",div);

let exponentiation=a/b;
console.log("The exponentiation is :",exponentiation);
*/