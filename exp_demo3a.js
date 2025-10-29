var express = require('express');
var router = express();

router.get('/home', function(req, res){
    res.send("Hello world! from chloe 3");
});

router.post('/home', function(req, res){
    res.send("You just call the post method at '/hello'!\n");
});

//export this router to use in exp_demo3b.js
module.exports = router;
