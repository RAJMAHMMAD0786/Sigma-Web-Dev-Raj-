const express = require('express');
const birds = require('./routes/birds');

const app = express();
const port = 3000;

const fs = require("fs");


// Middlewares 
app.use(express.static("public"))

app.use('/birds', birds);

// Middlewares 1 -> middlewares respons ko edit and change dono hi kar sakta hai 
// next()---> next ka used kiya jta hai agle ko call karne ke liye agara hai yeha se response nahi de rahe hai toh agla de dega is liye next ko calling kiya jata hai 

app.use((req, res, next) => {

    console.log(req.headers);

    req.rajmahmmad = "I am RajMahmmad pursuing B.Tech CSE at NIMS University";   //ye set kiya gya hai

    fs.appendFileSync( "log.txt" , `${Date.now()} is a ${req.method}\n`);

    console.log(`${Date.now()} is a ${req.method}`);

    //   res.send("hello how are you")  //Agar aap ye res bhe rahe ho toh next() nahi call karna padega  

    next();
});


// Middlewares 2
app.use((req, res, next) => {
    console.log('m2');
    req.Rahmat = "My friends is Rahmat and he is my child friends pursuing B.Tech CSE at NIMS University";
    next();
});



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.Rahmat);
});

app.get('/contect', (req, res) => {
    res.send('Hello contect!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});