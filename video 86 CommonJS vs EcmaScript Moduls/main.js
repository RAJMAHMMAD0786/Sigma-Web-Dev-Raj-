// Import ka used kar raha hun

// named export ---> ko kisi bhi named se nahi liya ja sakta hai , same name se liya jayega.
import {a,b,d} from "./mymodule.js"
console.log(a,b,d)


// default export  ---> ko kisi bhi name se liya ja sakta hai.
import raj from "./mymodule.js"
console.log(raj)   


//---> ham kaise used kar rahe hai module require export etc ko is function ke help se used kar rahe hai
// (function(exports,require,module,__filename,__dirname){ 

    // module code actually lives here 
// });


// required ka used kar raha hun
// const a=require("./mymodule1.js")
// console.log(a, __dirname, __filename)
