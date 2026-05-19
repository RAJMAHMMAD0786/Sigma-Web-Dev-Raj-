console.log("This is a function titorial :");

// function ---> block of code hota hai, jisaka used kiya jata hai koi bhi code ko bar bar na likhana pade Isiliye ham funtion ka used karte hai 


function Message(name) {
    console.log("Hey"+name+"Is good man");
    console.log("Hey"+name+"Is In B Tech");
    console.log("Hey"+name+"Is IN CSE");
    console.log("Hey"+name+"Is Engineer");
    console.log("Hey"+name+"Is Honest man");
}

// Fuction call
Message("Raj Mahmmad");
Message("Nishant");


function sum(a,b,c=10) {
    return a+b+c;
}

// function call
result1=sum(10,20,5);
result2=sum(11,20);
result3=sum(12,20);

console.log("The sum of these Number is :",result1);
console.log("The sum of these Number is :",result2);
console.log("The sum of these Number is :",result3);



// Arrow function

const func1=(x)=>{

    console.log("The value of the arrow function is :",x);
}

// Arrow function calling 
func1(10);
func1(11);
func1(12);
func1(13);
func1(15);