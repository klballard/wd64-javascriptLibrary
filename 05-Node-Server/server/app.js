require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var authTest = require('./controllers/authtestcontroller'); //we import the authtestcontroller file for access to those endpoints. 
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

app.use(require('./middleware/validate-session')); // we import the validate-session middleware, which will check to see if incoming request has a token.
app.use('/authtest', authTest); //anything beneath the validate-session will require a token to access, thus becoming protected. anything above it will not require a token, remaining unprotected. Therefore, the /test and /user routes are unprotected while the /authtest route is protected.

app.listen(3000, function() {
    console.log('App is listening on 3000.')
})