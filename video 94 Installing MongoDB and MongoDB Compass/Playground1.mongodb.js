

// Select the database to use.
use('SigmaDataBase');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  {
    "name": "CPP",
    "price": 5000,
    "Instructor": "Raj Mahmmad"
  },
  {
    "name": "Java",
    "price": 6000,
    "Instructor": "Amit Kumar"
  },
  {
    "name": "Python",
    "price": 5500,
    "Instructor": "Priya Sharma"
  },
  {
    "name": "JavaScript",
    "price": 4500,
    "Instructor": "Rahul Singh"
  },
  {
    "name": "HTML & CSS",
    "price": 3000,
    "Instructor": "Neha Gupta"
  },
  {
    "name": "React JS",
    "price": 7000,
    "Instructor": "Vikas Verma"
  },
  {
    "name": "Node JS",
    "price": 6500,
    "Instructor": "Sandeep Yadav"
  },
  {
    "name": "MongoDB",
    "price": 4000,
    "Instructor": "Pooja Mishra"
  },
  {
    "name": "Data Structures",
    "price": 8000,
    "Instructor": "Ankit Sharma"
  },
  {
    "name": "Machine Learning",
    "price": 12000,
    "Instructor": "Rohit Kumar"
  }
]);


// Print a message to the output window.
console.log(`Inserting Don `);


