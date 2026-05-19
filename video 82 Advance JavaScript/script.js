console.log("This tutorial is based on Advance JavaScript :");

// var a1 -> internally isako ye yeha pe la de raha hai. hosting concept 
console.log(a1);

// async function bana raha hoon
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50);       //After 2 sec you get 50 
        }, 2000);
    })
}


function sum(a,b,c){
    return a+b+c;
}

// IIFE 
(async function main() {

    // let a = await sleep();
    // console.log("The value of a is :->",a)
    // let b = await sleep();
    // console.log("The value of b is :->",b)


    // Destructiong 
    // Array ke liye 
    console.log("This is for Array :->")
    let [x,y,...rest]=[1,2,3,4,5,6,7];
    console.log(x,y,rest);

    // similarlly obj ke liye bhi hota hai
    console.log("This is for obj :->")
    let obj={
        a:1,
        b:2,
        c:3
    }

    let {a,b}=obj
    console.log(a,b);

    console.log("This is a spread :->");
    let arr=[1,5,7];
    console.log("The sum is :->",sum(arr[0],arr[1],arr[2]));

    // ...arr ka matalab hai ki spread karo orni khol do               
    console.log(sum(...arr)) 

})()


var a1=10;               //hosting concept    