const express = require('express');
const app = express();
const port = 3000;

const romanToArabic = require('./roman');

app.get('/', (req, res) => { 

    const roman = req.query.roman;

 
    // Cast number to string, otherwise express thinks we are sending a invalid status code.
    res.send(romanToArabic(roman) + '');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));