console.log("This lecture is based on error handling and try catch :");

// prompt ---> prompt ke helps se ham user se input lete hai , and prompt string type ka input return karta hai.

let a = prompt("Enter first number :");       //prompt string return karta hai
let b = prompt("Enter second number :");

// Is case mai jab ham string ko enter kar rahe hai tab NaN de raha hai , jabki isako error return karna chahiye , error return karne ke liye 
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed...");      //ye ham error de rahe hai  
}


let sum = parseInt(a) + parseInt(b);

console.log("The sum of the two number is :",sum);

function main() {
    try {            //try karo Agar sahi hai to print karo.
        console.log("The sum of the two number is :", sum * x);
        return true;
    } catch (error) {                  //yeha pe error ko handile kiya ja raha hai        
        alert(error.name);
        alert(error.message);
        alert(error.stack);

        console.log("Bhai error aa gya hai code mai kahi na kahi galat hai :");
        return false;
    }
    finally {    //finally ka used kiya jata hai kisi bhi case mai message dene ke liye.
        console.log("file are being closed...");
    }
}

// main() ko chalaya ja raha hai
main();



// prompt string return karta hai 