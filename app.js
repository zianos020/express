const express = require ('express');
const app = express();
const fs = require("fs");
const port = 4445;

let day = new Date().getDay();
let hour = new Date().getHours();

app.use((req, res, next )=>{
    if (day < 1 && day >= 6 && hour < 9 && hour < 17){
        res.send('sorry, this web application is closed untill monday at 9am');

    }else{
        next();

    }
});


//creating a router
app.get('/', (req, res) =>{
    fs.readFile('./Homepage.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});

app.get('/Homepage.html', (req, res) =>{
    fs.readFile('./Homepage.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});


app.get('/Contactus.html', (req, res) =>{
    fs.readFile('./Contactus.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});

app.get('/OurServices.html', (req, res) =>{
    fs.readFile('./OurServices.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});



// crreating a server
app.listen (port,(req, res) => {
    console.log(`server is running on ${port}...`)
})