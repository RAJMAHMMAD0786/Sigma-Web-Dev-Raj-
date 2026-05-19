// path ke bare mai dekh rahe hai

import path, { join } from "path"

console.log(path)

let mypath="C:\\Users\\rajal\\OneDrive\\Desktop\\SIGMA WEB DEV\\video 87 Working with fils fs and path Modules\\Raj.text "

console.log(path.extname(mypath))   //.text btata hai 
console.log(path.dirname(mypath))    //folder name btata hai
console.log(path.basename(mypath))    //file name batata hai


console.log(path.join("c:/","program\\Raj.text"))   //direct add karne ke liye used kiya jata hai

