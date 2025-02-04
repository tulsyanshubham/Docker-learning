const mongoose = require('mongoose');

const database = "mongodb://localhost:27017/testDocker";

mongoose.connect(database)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(() => {
        console.log('Connection to DB failed');
    });