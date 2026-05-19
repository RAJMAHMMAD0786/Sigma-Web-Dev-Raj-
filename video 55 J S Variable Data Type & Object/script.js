console.log("Hey I an good")

// variable

// var
var a =10;
var b=20;
var c=100;


// let
let a1=5;
let b1=10

let c1=20;

// let use
{
    let c1=10;
    // console.log("let variable :=",a1+b1+10)
    console.log("let variable :=",c1)
}
console.log("let variable :=",c1)


// var use
{
    var c=200;

    // console.log("var variable :=",a+b + 20)
    console.log("var variable :=",c)
}
console.log("var variable :=",c)


// const
const x1=10;
// x1=100; ---> this is not allow 
console.log("const variable is :=",x1)


// Data type 
// 1 premetive Data type

let x="RajMahmmad";
let y=10;
let z=3.55;

let p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)


// 2 object
let obj={
    "name":"Raj Mahmmad",
    "Job tytle":"Web Development",
    "salary":50000,
    "is_handsome":"true"
}

console.log(obj)

obj.branch="cse"
console.log(obj)

obj.salary="2cr"
console.log(obj)

obj.id="2023BECSE302"
console.log(obj)



// var 10y=2;    this is not allow in javascript variable
var _x=1;



// var ---> var globly scope hota hai , var can be update and re-decelared whithin its scope

// let ---> let block scope hota hai , let can be update but it can not be re-decelared

// const  --->const block scope hota hai , const ko nahi update kar sakte hai nahi re-decelared kar sakte hai


// nuul---> null ka type object hota hai , kyo hota hai google pe jao vvi for interview