var router = require('express').Router();
const { Router } = require('express');
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

/*
! GET ALL ITEMS FOR A SINGLE USER
*/
router.get('/getall', function (req, res) {
    var userid = req.user.id;

    AuthTestModel
        .findAll({
            where: { owner: userid }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

/*
! POST SINGLE ITEM FOR A SINGLE USER
*/
router.post('/create', function(req, res) {
    var owner = req.user.id;
    var authTestData = req.body.authtestdata.item;

    AuthTestModel
        .create({
            authtestdata: authTestData,
            owner: owner
        })
        .then(
            function createSuccess(authtestdata) {
                res.json({
                    authtestdata: authtestdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

/*
! GET SINGLE ITEM FOR A SINGLE USER
*/
router.get('/:id', function(req,res) {
    var data = req.params.id;
    var userid = req.user.id;

    AuthTestModel
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

/*
! DELETE A SINGLE ITEM FOR A SINGLE USER
*/
      // when a DELETE request is received, the controller looks for a matching function, like what the rest of the HTTP verbs do.
router.delete('/delete/:id', function(req, res) {  // we specify what we're doing in our endpoint to make it easy for the user to know what's happening. the :id allows a parameter to be passed through the URL to the server so we can use it later
    var data = req.params.id; // this is the parameter passed through the URL. the same way req.body points to the body of the request. req.params points to the URL
    var userid = req.user.id; // this is our userid, set when the validate-session is called.

    AuthTestModel
        .destroy({  // .destroy() is a sequelize method to remove an item from a database
            where: { id: data, owner: userid }
        }).then(
            function deleteLogSuccess(data) { // callback function. this response is sent when the delete is successful
                res.send("you removed a log");
            },
            function deleteLogError(err) { // callback function. this response is sent when the delete fails.
                res.send(500, err.message);
            }
        );
});

/*
! UPDATE A SINGLE ITEM FOR A SINGLE USER
*/
   //PUT is an HTTP verb that means update
router.put('/update/:id', function(req, res) {  // to make it easier on the user, we use update in our route. we also allow a variable (id) to be passed through the URL again.
    var data = req.params.id; // the parameter taken from the URL
    var authtestdata = req.body.authtestdata.item; // our data we want to put into the database, replacing what already exists

    AuthTestModel
        .update({  // .update() is a sequelize method which takes two arguments
            authtestdata: authtestdata // first argument of .update(). contains an object holding the new value we want to edit into the database.
        },
        {where: {id: data}} // the second argument of the .update(). tells sequelize where to place the new data if a match is found
        ).then(
            function updateSuccess(updatedLog) { // callback function. runs if update succeeds, and returns data entered.
                res.json({
                    authtestdata: authtestdata
                });
            },
            function updateError(err){ // callback function. runs if update fails, and returns the error message.
                res.send(500, err.message);
            }
        )
});


module.exports = router;