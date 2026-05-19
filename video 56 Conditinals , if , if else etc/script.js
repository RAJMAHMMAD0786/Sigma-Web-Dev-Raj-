console.log("Hello I am Study Conditional Titorial in this lecture :");

let age=17;

let grace=2;

//1. Arithmetic Operators 
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);         //exponentiation ---> Square 
console.log(age%grace);


if((age+grace)>18)
{
    console.log("You can Drived :");
}
else{
    console.log("You can not Drived :");
}

//2. Assignment Operators     ---> Used All Operators 
let x=10;

console.log("The value of the x is :",x);

x +=20;

console.log("The value of the x is :",x);



// 3. Comparission Operators 
let p=10;
let q=10;

if(p==q)
{
    console.log("This is true :");
}
else{
    console.log("This is not true :");
}


// 4. Logical Operators 
let a=10;
let b=20;

// AND && Operators 
if(a!=b && b!=a)
{
    console.log("This is true Because && Logical :");
}
else{
    console.log("This is not true :");
}

// OR || Operators 
if(a!=b || a==b)
{
    console.log("This is true because OR Logical :");
}
else{
    console.log("This is not true :");
}



// Conditional statements 

// is else if statements 

let a1=2;

if(a1==0)
{
    console.log("This is true :");
}

else if(a1==1)
{
    console.log("I am Kidding :");            //kidding ---> majak 
}
else if(a1==2)
{
    console.log("I am also kidding :");
}
else{
    console.log("This is false :");
}


// Ternary Operators 

let p1=12;
let q1=20;

console.log(p1>q1 ?(p1-q1):(q1-p1));

/* Translator 

if(p1>q1)
{
    console.log(p1-q1)
}
else{                              : ---> means --->else
    console.log(q1-p1)
}


*/
