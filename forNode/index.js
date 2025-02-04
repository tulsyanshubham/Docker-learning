const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/about', (req, res) => {
    res.json({
        message: 'About Us'
    });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});