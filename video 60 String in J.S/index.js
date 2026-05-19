console.log("This is tutorials on String in J S :");

// String 
let a = "RajMahmmad";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);
// console.log(a[10]);

console.log("The lenght of this String :", a.length);

// Template Litrals 

let real_name = "RajMahmmad";
let Friends_name = "Rahmat";

console.log("His name is " + real_name + " The friends name is " + Friends_name);
console.log(`His name is ${real_name} and The  frinds name is ${Friends_name}`);


// String Properties and methods 
console.log("This is string properties and methods :");

let x="RajMahmmad";

// 1. length
console.log(x.length);

// 2. toUppercase()
console.log(x.toUpperCase());

// 3. toLowerCase()
console.log(x.toLowerCase());

//4.slice(2,4)                 ---> isame jaha se start ho raha hai waha se print hoga jaha tak ending point hai usake yek pahle tak 
console.log(x.slice(1,8));

// 5. slice(5)
console.log(x.slice(3));

// 6.replace ---> yek name ko dusare name se replace kar sakte hai
console.log(x.replace("Raj","Rahamat"));

// 7. cocatination(+)
console.log(x.concat("RahamatAlam","Nishant","Pankaj","Sandeep"));

// String are Immutable ---> Ham string ko change nahi kar sakte hai

console.log(x);


// Another properties of string , try you self 
console.log(x.startsWith("Ra"));

console.log(x.endsWith("d"));

console.log(x.endsWith("m"));

console.log(x.indexOf("R"));



// JavaScript sabse kam error dene wala language hota ,