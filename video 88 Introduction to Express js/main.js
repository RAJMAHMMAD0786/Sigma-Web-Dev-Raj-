const express = require('express')
const app = express()
const port = 3000

// 5.static files ---> isaka matalab hai ki aap jo file is folder mai rakhe hai usako aap apne website pe public tarika se la sakte hai and yeh yek MIDDLEWARE hota hai
// middleware ---> middleware is used for send the file , jis file ko aap kisi ko dena chate hai usake liye isaka used kiya jata hai
app.use(express.static('public'))


// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// about
app.get('/about', (req, res) => {
  res.send('About us')
})

// contect
app.get('/contect', (req, res) => {
  res.send('Hello contect me!')
})

// blog
app.get('/blog', (req, res) => {
  res.send('This is blog!')
})


// 4.Request Parameter and queries ---> Isaka used isliye kiya gya hai ki hamko har bar alag alag request nahi banana pade har name se 
// http://localhost:3000/blog/intro-to-Rajmahmmad
app.get('/blog/:slug', (req, res) => {
    // logic to fetch (slug) from the db

    console.log(req)

    // http://localhost:3000/blog/intro-to-Rajmahmmad?mode=dark&region=in
    
    console.log(req.params)  //will output { slug: 'intro-to-Rajmahmmad' }
    console.log(req.query)   //will output {mode:='dark' , region:='in'}

  res.send(`Hello ${req.params.slug}`)

})





// mujhe har bar alag alag bana pad raha hai get request jo ki yek good way nahi hai 

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db(Data Base)
//   res.send('This is blog intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     //  logic to fetch intro to python from the db(Data Base)
//   res.send('This is blog intro-to-python!')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

