var express = require('express');
var app = express();
app.get('/home',(req, res) => {
    res.send('Home Page/Chloe');
});
app.get('/about', (req, res) => {
    res.send('About Chloe');
});


app.listen(3000);


