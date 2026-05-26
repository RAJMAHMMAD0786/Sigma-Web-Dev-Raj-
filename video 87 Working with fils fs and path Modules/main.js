// fs modules 

// Agar aap  type="module"  nahi likhe ho toh isase chalega. 
// const { error } = require("console")
// const fs=require("fs")

// type="module"  Likha hai isiliye isaka used ho raha hai
import fs from "fs"


console.log(fs)

console.log("Starting")

// fs.writeFileSync---> isame dikat ye hai ki isake chalne ke bad hi agla code chalega.

// fs.writeFileSync("Raj.text" , "Raj Mahmmad is a B Tech (CSE) Student")


// fs.writeFile ---> isame koi dikat nahi hai ki isake chalne ke bad hi agla code chalega 
fs.writeFile("Raj1.text","Raj Mahmmad is a B Tech (CSE) student1" , ()=>{
    console.log("Don")

    // ham yeha pe callback ka used kar rahe hai
    fs.readFile("Raj.text" , (error,data)=>{
        console.log(error,data.toString())
    })

    // again, Agar mai same code likhun toh isako call back hell bolenge

})

// fs.appendFile ---> iske used se ham us file ke andar jakar jo likhana chahte hai voh likh pa rahe hai, jitana bar aap run karoge utana bar vaha pe append hoga 
fs.appendFile("Raj.text","3rd year student" , (e,d)=>{
    console.log(d)
})


// fs.rename ---> isase file ko rename kiya ja raha hai
fs.rename("Raj1.text" , "RajMahmmad.text" , ()=>{
    console.log("File rename ")
})

console.log("Ending")    


/*App isaka prectice kar sakte hai
Most Important (Interview / Real Project)

readFile

writeFile

appendFile

unlink

rename

mkdir

readdir
*/