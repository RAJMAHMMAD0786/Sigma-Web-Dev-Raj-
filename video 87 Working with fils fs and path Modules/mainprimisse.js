import fs from "fs/promises"

// fs.readFile--->jo bhi likha gya tha Raj file ke andar usako maine read kiya hai yeha pe 
let a=await fs.readFile("Raj.text")

// fs.appendFile---> ka used kiya jo Raj.text ke andar ja kar likh raha hai content ko
let b=await fs.appendFile("Raj.text" , "\n\n This is a amazing promises")

console.log(a.toString(),b)