console.log("This tutorial is based on async/await :");

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(555);
//         }, 3500);
//     })
// }


/*settle means resolve or reject 
. resolve ---> resolve means promise has setteled successfully
. reject ---> reject means promise has not setteled successfully
*/


// fetch api---> isaka used kiya jata hai promise ke badale mai.
async function getData() {
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    return data;
}


// await ---> await ka used only async function ke andar hi kar sakte hai,(jab async ka used kiya jata hai toh await ka used kiya jata hai)

async function main() {
    console.log("Loading modules...");

    console.log("Do something else...");

    console.log("Load data...");

    let data = await getData();         //await 

    console.log(data);                 //555
    console.log("Process data...");
    console.log("Task 2 :");
}

// main() ko chalana padega code ko execute karne ke liye 
main();


// .then ke madate se ham tab tak wait kar rahe hai jab tak ki data nahi aa jata hai...but in kamo ko async/await ke madate se bhi kiya ja sakta hai jo ki yek achha tarika hai

// data.then((v) => {
//     console.log(data);              //555
//     console.log("Process data...");
//     console.log("Task 2 :");
// })