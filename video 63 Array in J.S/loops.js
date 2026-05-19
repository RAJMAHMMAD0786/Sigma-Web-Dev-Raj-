console.log("This is a loop using array :");

let a =[1,2,3,4,100];

for (let i = 0; i < a.length; i++) {        //normal for loop hai jisako ham used karte hai
    const element = a[i];
    
    console.log(element);
}


// forEach loop , 
console.log("This is forEach loop :")

a.forEach((value , index , array)=>{
    console.log(value,index,array);
})


// for in loop ---> object mai used kiya jata hai
let obj={
    a:10,
    b:20,
    c:30
}

// if condition ka used isiliye kiya ja raha hai , Because kuchh pre-define value hota hai , vo value used na ho isisliye if condition ka used kiya ja raha hai
console.log("This is forin loop :")
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    
    console.log(key,element);
}


// forof loop ---> Array mai used kiya jata hai
console.log("This is forof loop :")
for (const value of a) {
    
    console.log(value);
}