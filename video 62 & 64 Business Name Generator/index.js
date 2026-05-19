/* Create a Business Name Generator by combing list of objectivea and Shop name and Another word 

Ajectives :
Crazy
Amazing 
Fire 

Shop Name :
Engine 
Foods
Garments 

Another word :
Bros
Limited
Hub

*/



let Crazy = "Crazy";
let Amazing = "Amazing";
let Fire = "Fire";
let Engine = "Engine";
let Foods = "Foods";
let Garments = "Garments";
let Bros = "Bros";
let Limited = "Limited";
let Hub = "Hub";


let rand = Math.random();
let first, second, third

// 100% ---> (0-0.33) (0.33-0.66) & (0.66-1)

// let generats the first words
if (rand < 0.33) {
    first = Crazy;
}
else if (rand > 0.33 && rand < 0.66) {
    first = Amazing;
}
else {
    first = Fire;
}

// let generats the second words
 rand = Math.random();

if (rand < 0.33) {
    second = Engine;
}
else if (rand > 0.33 && rand < 0.66) {
    second = Foods;
}
else {
    second = Garments;
}


// let generats the third words
 rand = Math.random();

if (rand < 0.33) {
    third = Bros;
}
else if (rand > 0.33 && rand < 0.66) {
    third = Limited;
}
else {
    third = Hub;
}

// console.log(` ${first} ${second} ${third}`);                     This is the right 
console.log("The name generator is:", first, second, third);