
// operator data base
use("operatorDB")

// This is gives the name of the database 
console.log(db);

// create 
db.createCollection("PrecticeOp")

// insert
db.PrecticeOp.insertOne({
    name: "Rajmahmmad",
    age: 21,
    course: "B Tech",
    branch: "CSE",
    Hoby: "Cricket"
})


// db.PrecticeOp.insertMany([
//     {
//         name: "Rajmahmmad",
//         age: 21,
//         course: "B Tech",
//         branch: "CSE",
//         hobby: "Cricket"
//     },
//     {
//         name: "Aman",
//         age: 22,
//         course: "B Tech",
//         branch: "IT",
//         hobby: "Football"
//     },
//     {
//         name: "Rahul",
//         age: 20,
//         course: "B Tech",
//         branch: "ECE",
//         hobby: "Chess"
//     },
//     {
//         name: "Priya",
//         age: 21,
//         course: "B Tech",
//         branch: "CSE",
//         hobby: "Reading"
//     },
//     {
//         name: "Neha",
//         age: 22,
//         course: "B Tech",
//         branch: "ME",
//         hobby: "Dancing"
//     },
//     {
//         name: "Arjun",
//         age: 23,
//         course: "B Tech",
//         branch: "CE",
//         hobby: "Photography"
//     },
//     {
//         name: "Suman",
//         age: 20,
//         course: "B Tech",
//         branch: "EEE",
//         hobby: "Singing"
//     },
//     {
//         name: "Rohit",
//         age: 21,
//         course: "B Tech",
//         branch: "CSE",
//         hobby: "Gaming"
//     },
//     {
//         name: "Karan",
//         age: 22,
//         course: "B Tech",
//         branch: "IT",
//         hobby: "Travelling"
//     },
//     {
//         name: "Pooja",
//         age: 21,
//         course: "B Tech",
//         branch: "ECE",
//         hobby: "Painting"
//     }
// ]
// )









// $gt (Greater Than)
// let a=db.PrecticeOp.find({ age: { $gt: 20 } })
// console.log(a)


// $in---> Isame Kaun Kaun hai
// db.PrecticeOp.find({
//   branch: { $in: ["CSE", "IT"] }
// })


// $or
// db.PrecticeOp.find({
//   $or: [
//     { age: 21 },
//     { hobby: "Cricket" }
//   ]
// })









// $gt, $gte, $lt, $lte, $in, $or, $and, $set, $inc, $push, $pull, $regex. These are the most frequently used.




