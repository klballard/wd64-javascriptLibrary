var express = require('express')
var router = express.Router()   //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/*
! Section 1
*/

router.post('/createuser', function(req,res) {
    var username = req.body.user.username;
    var pass = req.body.user.password;
    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    }).then(
        function createSuccess(user) {
              //1          //2        //3          //4            //5 
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                user: user,
                message: 'created',
                sessionToken: token //6
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;

/*
! Section 2
*/

        //7
router.post('/signin', function(req,res) {
          //1       //2        //3                                 //4
    User.findOne( {where: { username: req.body.user.username } } ).then(

         //5
        function(user) {
            //8
            if (user) {
                         //9            //10                 //11                 //12
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                //    console.log("The value matches:", matches);  //13
                //15
                if (matches) {
                 //16
                 var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                 res.json({
                     user: user,
                     message: "successfully authenticated",
                     sessionToken: token
                 });
                }else {
                    res.status(502).send({ error: "you failed, yo"});
                }
                })
            } else {  //14
                res.status(500).send({ error: "failed to authenticate" });  
            }
        },
        function(err) {
            res.status(501).send({ error: "you failed, yo"});  //6
        }
    );
});



/*
! Section 1
 1.   Create a variable to hold the token.

 2.   .sign() creates the token. It takes at least 2 parameters: the payload and the signature. You can also supply some specific options or a callback.

 3.   This is the payload, or data we're sending. user.id is the primary key of the user table and is the number assigned to the user when created in the database.

 4.   This is the signature, which is used to help encode and decode the token. You can make it anything you want, and we will make this private later.

 5.   We set an option to make the token expire. Here, we're taking (seconds minutes hours); in other words, 1 day.
 This has now been changed in the .env file, as well as .gitignore. Reference those if confused

 6.   We pass the value of the token back in our response. The server has now assigned a token to a specific user, and the client will have that token to work with (once we have a client).



! Section 2 Notes

 1.   The findOne() method is a Sequelize method that does exactly what it says: it tries to find something within the database that we tell it to look for. This is called Data Retrieval. Check out the Sequelize docs here (Links to an external site.).
 2.   where is an object within Sequelize that tells the database to look for something matching its properties.
 3.   We're looking in the username column in the user table for one thing that matches the value passed from the client.
 4.   The promise is handled within the .then() function.
 5.   Here we have a function that is called when the promise is resolved, and if successful, sends the user object back in the response.
 6.   Function called if the promise is rejected. We print the error to the console.
 7.   We're sending data this time, so we use router.post instead of router.get.

 
 8.   First we check to make sure that a match for the username was found.
 9.   Before, we used bcrypt to encrypt the password. Now, we use it to decrypt the hash value and compare it to the supplied password. This is a complex task, and we let the highly reputable and revered bcrypt package handle the algorithm for doing that. As a best practice, you shouldn't try to write this or use something that you have written. First of all, it will take months of your life to rebuild something that is already working. You can read more about bcrypt.compare() at the npm registry (Links to an external site.).
 10.  Here we pull in the password value from the current request when the user is signing up.
 11.  This pulls the hashed password value from the database.
 12.  Run a callback function that will run on either success or failure of compare.
 13.  If the hashed password in the database matches the one that has been entered, print to the console that the password values match. Note that the matches variable is a boolean.
 14.  Handle situations where the match fails.





! Create User Endpoint: Starter



router.post('/createuser', function(req, res) {

    var username = "The Dude";
    var pass = "therugtiedtheroomtogether";           

    User.create({
        username: username,
        passwordhash: pass
    }).then(
        function message() {
            res.send("I hate The Eagles, man");
        }
    );
})

module.exports = router;

*/