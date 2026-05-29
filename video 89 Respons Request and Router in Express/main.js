const express = require('express')

const blog = require('./routes/blog');
const shop = require('./routes/shop');

const app = express()
const port = 3000



// middleware :->
// post request marne ke liye isaka used kiya jata hai
app.use(express.static("public"))

app.use('/blog', blog);
app.use('/shop', shop);


// get-request->By-default browser mai mari jati hai 
app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World get request!')
})



// post-requet-> Post-request marne ke liye html file ka used kiya jata hai and Sensative data ke liye post request mari jati hai 
app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World1 post request!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put request!')
})

app.delete('/', (req, res) => {
    console.log("Hey its a delete request")
    res.send('Hello World delete request!')
})


// Serving HTML files
// ye appko milega /index
app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('tamplates/index.html', { root: __dirname })
})

// ye aapko milega /api
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})