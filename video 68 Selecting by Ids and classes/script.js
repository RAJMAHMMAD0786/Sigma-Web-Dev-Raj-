console.log("This is a javascript id and classes :");

// getElementsByClassName

// let boxes=document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor="red";
// boxes[2].style.color="white";


// getElementById ---> isaka used kiya jata hai particular element ko target karne ke liye 

document.getElementById("redbox").style.backgroundColor="red";
document.getElementById("redbox").style.color="white";


// querySelector ---> isaka used kiya jata hai elements ko target karne ke liye , and yeh sabse pahle element ko target karta hai 

document.querySelector(".box").style.backgroundColor="blue";

// querySelectorAll ---> isake liye hamako loop ka used karna padega , property ko applie karne ke liye 
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=>{
    // console.log(e);
    e.style.backgroundColor="aqua";
    e.style.color="red";
})


// getElementsByTagName ---> return the elemets with the given tag name 
console.log(document.getElementsByTagName("div"));


// getElementsByName ---> search karta hai elements ko name attributes ke sath 
// console.log(document.getElementsByName("box"));


//1. matches mathods() ---> matches methodes ka used kiya jata hai match karane ke liye elements ko ki kya ye elemets is name se hai or nahi hai
console.log("This is a matches methods :");

e=document.getElementsByTagName("div")
console.log(e);

console.log(e[4].matches("#redbox"));
console.log(e[3].matches("#redbox"));


//2. closest ---> ye search karta hai apne closet jo isaka pairent ho
console.log("This is a closet :");

console.log(e[4].closest("#redbox"));
console.log(e[3].closest("#redbox"));

console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));


//3. contains ---> ye btata hai ki kaun kisako contain kar raha hai , Agar contain karega toh true return karega , nahi toh false return karega 
console.log("This is a contains :");

console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));

console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));

console.log(document.querySelector("body").contains(document.querySelector("html")));
console.log(document.querySelector("html").contains(document.querySelector("body")));
