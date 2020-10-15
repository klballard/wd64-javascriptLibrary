var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.headers.authorization; //1  //creates sessionToken variable, a req pull from the auth. header
        console.log(sessionToken) //2   //console logs the token for debugging purposes
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.'}); //3 //if no token is present an error occurs
    else { //4
        jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //5 // the verify method decodes the token with the given secret
            if(decoded){
                User.findOne({where: {id: decoded.id}}).then(user => {  //6 //if the token is successfully decoded, findAndCount searches for a matching user id from the decoded info
                    req.user = user; //7 //the callback sets the user value or the request as the id value is passed to it, then sends the request to the next destination. necessary later in adding to the database.
                    next();
                },
                function(){ //8 if no matching id is found, an error is thrown.
                    res.status(401).send({error: 'Not authorized, no matching id has been found.'});
                });
            } else { //9 if there is no value for decoded, an error message is also thrown.
                res.status(400).send({error: 'Not authorized, no value for decoded info.'});
            }
        });
    }
}
}


/*
1.    The variable sessionToken is created to hold the token, which is pulled from the authorization header of the request coming in.
2.    The token is printed to the console. This is purely for debugging purposes to verify that the token is being sent to the server. It should not be left in the final code, as it is a potential security vulnerability.
3.    If no token is present, the 403 Forbidden error is returned as the response. We have several different error handling responses in this file, so assigning each a different error code or message is a big help in debugging.
4.    No user property is ever provided in the request, so only tokens will get checked. This prevents unauthorized use of a token that was assigned to a different user.
5.    The verify method decodes the token with the provided secret, then sends a callback with two variables. If successful, decoded will contain the decoded payload; if not, decoded remains undefined. err is null by default.
6.    If decoded has a value, the Sequelize findOne method looks for an id in the users table that matches the decoded.id property. This value is then passed into a callback.
7.    The callback sets the user value for the request as the id value passed to it then sends the request on to its next destination. This property will be necessary later in adding to the database.
8.    If no matching id is found, an error message is thrown.
9.    If no value for decoded info, an error message is thrown.
*/