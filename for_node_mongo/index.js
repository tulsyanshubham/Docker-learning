const mongoose = require('mongoose');
const express = require('express');
const app = express();

const database = "mongodb://mymongo:27017/testDockery";
//                             ^--- name of mongo container

mongoose.connect(database)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(() => {
        console.log('Connection to DB failed');
    });

app.get('/',(req,res)=>{
    res.json({
        message:"hello world!"
    })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});