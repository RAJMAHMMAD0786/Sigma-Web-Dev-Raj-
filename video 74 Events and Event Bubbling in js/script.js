console.log("This is a tutorial of 74 related to the events and bubbling :");

// List of all mouse events :!

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let buttom=document.getElementById("btn");

//1. click ---> click karne pe koi dusara massege de sakte hai
buttom.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b> This contant is show after click button </b>";
})


//2. dbl--> (duble click) karne pe koi dusara massege de sakte hai
buttom.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b> This contant is show after dblclick button </b>";
})

//3. contextmenu ---> right click karne pe koi dusara massege de sakte hai 
buttom.addEventListener("contextmenu",()=>{
    alert("Dont hack up by right click please :")
})


//4. mousedown --->jab aap mouse ko button pe le ja kar click karoge toh yeh trigger hoga or chalega 
// buttom.addEventListener("mousedown",()=>{
//     alert("Dont hack up by right click please :")
// })

//5. mouseenter ---> jab aap mouse ko button pe le jaoge tab aap koi massege de sakte ho
// buttom.addEventListener("mouseenter",()=>{
//     alert("woh :")
// })


//6. mousemove
// buttom.addEventListener("mousemove",()=>{
//     alert("mouse ko button pe mat le jao nahi toh hack kar liye jaoge :")
// })


//7. mouseover
// buttom.addEventListener("mouseover",()=>{
//     alert("Dont hack up by right click please :")
// })

// note ---> isake alawe bahut sara mause events hota hai dekhane ke liye upar diye gye link pe jao




// keyword events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events

// document.addEventListener("keydown", (e) => {
//     console.log(e);
// });

document.addEventListener("keydown", (e) => {
    console.log(e.key,e.keyCode);
});




// isake alawe aap form , submit etc pe dhekh sakte hai 
