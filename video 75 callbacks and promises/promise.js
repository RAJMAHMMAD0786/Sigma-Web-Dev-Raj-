// console.log('RajMahmmad');

// alert('Harry Bhaiya :')


// promises ---> callback ke problem ko resolve karta hai
let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a > 0.5) {
        console.log("No random number was not supporting yor1 :");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am Done1 :");
            resolve("RajMahmmad1")
        }, 1000);
    }
})


let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a > 0.5) {
        console.log("No random number was not supporting yor2 :");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am Done2 :");
            resolve("RajMahmmad2 :")
        }, 1000);
    }
})

// catch ke help se error ko sahi kiya jata hai hai , taki hamare website pe ja network issue ho toh error na aaye koi massege aa jaye .

// used this point one by one okey.

// 1. all
// 2. allSettled
// 3. race
// 4. any
// 5. resolve
// 6. reject

let p3 = Promise.reject([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})


