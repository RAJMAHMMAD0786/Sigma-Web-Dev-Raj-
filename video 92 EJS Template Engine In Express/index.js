const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')


// 
app.get('/', (req, res) => {

    let siteNmae="RajMahmmad"
    let searchText="Search Now"

    let arr=["Raj",7,71]

    res.render("index", {siteNmae:siteNmae, searchText:searchText,arr})
});

// blog
app.get('/', (req, res) => {

    let blogTitle="RajMahmmad why and when"
    let blogContent="RajMahmmad is very good boy"

    res.render("index", {blogTitle:blogTitle, blogContent:blogContent})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});