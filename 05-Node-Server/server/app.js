require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var user = require('./controllers/usercontroller') //1
var sequelize = require('./db');



app.use('/api/test', function(req, res) {
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

sequelize.sync();   // tip: pass in {force: true} for resetting tables
express.json();
app.use(express.json());
app.use(require('./middleware/headers'));
app.use('/test', test);

app.use('/api/user', user); //2

//3 You could also right it this way without the require statement in 1
//app.use('/api/user', require('./controllers/usercontrollers'));

app.listen(3000, function() {
    console.log('App is listening on 3000.')
})