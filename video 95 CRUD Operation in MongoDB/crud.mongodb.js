
// CRUD Operations
use("crudDB")

// This is gives the name of the database 
console.log(db)

// Create DataBase
db.createCollection("Operation")

// Insert Data in crudDB

// insertOne:-> means insert only one data at a time in data base 

db.Operation.insertOne({
    name: "Math",
    price: 0,
    assignmet: 15,
    Project: 21,
    Instructor: "Rajmahmmad"
})


// insertMany->means insert multiple data at a time in data base 
// db.Operation.insertMany([
//     {
//         name: "Math",
//         price: 0,
//         assignment: 15,
//         project: 21,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Physics",
//         price: 1000,
//         assignment: 12,
//         project: 18,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Chemistry",
//         price: 1200,
//         assignment: 14,
//         project: 20,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Biology",
//         price: 900,
//         assignment: 10,
//         project: 15,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "English",
//         price: 800,
//         assignment: 16,
//         project: 12,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Computer Science",
//         price: 2000,
//         assignment: 25,
//         project: 30,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Java",
//         price: 1500,
//         assignment: 20,
//         project: 22,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "C++",
//         price: 1400,
//         assignment: 18,
//         project: 24,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Web Development",
//         price: 2500,
//         assignment: 28,
//         project: 35,
//         instructor: "RajMahmmad"
//     },
//     {
//         name: "Data Structures",
//         price: 1800,
//         assignment: 22,
//         project: 27,
//         instructor: "RajMahmmad"
//     }
// ]
// )


// Read:->

// find:->means find the any data in the database
let a=db.Operation.find({price:0})

// console.log(a);

// console.log("This is gives the number of item :",a.count());

// console.log(a.toArray());


// findOne:->means find the first data in the DataBase 
let b=db.Operation.findOne({price:0})

// console.log(b);



// Update

// updateOne->update one data ata a time in database
// db.Operation.updateOne({price:0}, {$set:{price:51}})

// updateMany->update multiple data at a time in database
db.Operation.updateMany({price:0}, {$set:{price:501}})



// Delete 

// deleteOne->delete data one at a time in database
db.Operation.deleteOne({price:51})

// deleteMany->delete multiple data at a time in database
db.Operation.deleteMany({price:501})








