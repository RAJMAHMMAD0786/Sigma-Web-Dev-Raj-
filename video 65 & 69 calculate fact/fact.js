//  6 ka fact nikalna hai 

let arr=[1,2,3,4,5,6];

let fact=(a,b)=>{
    return a*b;
}

console.log("The fact of the given number is :",arr.reduce(fact));