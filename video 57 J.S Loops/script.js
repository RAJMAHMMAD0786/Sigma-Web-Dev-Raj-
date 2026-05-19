console.log("This is a tutorial of loops :");

let a=1;

// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

// normal for loop 

for (let i = 0; i < 100; i++) {
    
    console.log(a+i);
}


// for in loop ---> object ke key and value ko print karta hai

let obj={
    "name":"Raj Mahmmad",
    "Role":"Web Developer",
    "Company":"Google"
}

for (const key in obj) {

    const element = obj[key];
    
    console.log(key,element);
}


// forof loop ---> ka used Iterator ke liye kiya jata hai , Array and String mai 

for (const c of "Raj Mahmmad") {          //Abhi mai string ke madat se kar raha hun 
    
    console.log(c);
}


// while loop ---->

let i=1;

console.log("This is while loop:");
while(i<10)
{
    console.log(i);
    i++;
}

// do while loop ---> kam se kam yek bar chalega hi chalega , chahe condititon wrong hi kyo na ho 

let x=10;

console.log("This is do while loop :");
do{
    console.log(x);
    x++;
}while(x<10);