var express = require('express');   //1 (section1)
var router = express.Router();   //2 (section1)
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //1


/*
! Controller Method #1: Simple Response (notes section 2)
*/
    //1        //2
router.post('/one', function (req, res) {
    //3
    res.send("Test 1 went through")
});

/*
! Controller Method #2: Persisting Data (notes section 3)
*/

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; //2

    TestModel  //3
    .create({  //4
       //6
       testdata: testData //5
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});


/*
! Controller Method #3: req.body (notes section 4)
*/
router.post('/three', function (req, res) {
                    //1
    var testData = req.body.testdata.item;

    TestModel
        .create({  //2
            testdata: testData
        })
        res.send("Test three went through!")
        console.log("Test three went through!")
});

module.exports = router;

/*
! STEP 4 - Use this with Postman (section 5)
*/
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(   //1
            function message() {   //2
                res.send("Test 4 went through!");
            }
        );
});

/*
! Route 5: Return data in a promise (section 6)
*/
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(                   //1
            function message(data) {
                res.send(data);  //2
            }
        )
})

/*
! Route 6: Return response as JSON (section 7)
*/
router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({  //1
                    testdata: testdata  //2
                });
            }
        );
});

/*
! Route 7: Error Handling (section 8)
*/
router.post('/seven', function(req, res) {
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata) {
                res.json({
                    testdata: testData
                });
            },
            function createError(err) {  //1
                res.send(500, err.message);
            }
        );
});

/*
! GET: Get simple message from server
*/
router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client.')
})


/*

! Section 1 Notes

//3    //4 //5             //6
router.get('/', function (req, res) {
      //7  
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req, res) {
    res.send('Hey!!! This is an about route.');
});

router.get('/contact', function (req, res) {
    res.send({"user": "kenn", "email": "kenn@beastmode.com"});
});

router.get('/projects', function (req, res) {
    res.send(["Project 1", "Project 2"]);
});

router.get('/mycontacts', function (req, res) {
    res.send([{"user": "quincy", "email": "kenn@beastmode.com"},{"user":"aaron", "email": "aaron@beastmode.com"},{"user":"quincy","email":"quincy@beastmode.com"},{"user":"tom", "email":"tom@beastmode.com"}]);
});

//8
module.exports = router;



1.    We import the Express framework and it inside the variable express. This instance becomes our gateway to using Express methods.

2.    We create a new variable called router. Since the express variable(line 1) gives us access into the express framework, we can access express properties and methods by calling express + .. Therefore, when we call express.Router(), we are using the express variable to access the Router() method.
      The Router() method will return a router object for us. You can read about it more at the Express docs (Links to an external site.).

3.    We use the router object by using the router variable to get access into the Router() object methods.

4.    get() is one of the methods in the object, and we call it here. This method allows us to complete an HTTP GET request. We pass two arguments into the .get method.

5.    The first argument is the path. In this case, the path is just a /. More on this later.

6.    The second argument is a callback function. This is also sometimes called a “handler function”. This function gets called when the application receives a request to the specified route and HTTP method. The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

7.    Inside our callback function, we call res.send(). send() is an express method that can be called on the res or response object. Our response parameter is just a simple string.

8.    We export the module for usage outside of the file.

 ! Section 2 Notes
 1.   We use the Express router object to call the post() method. This corresponds to the type of HTTP request that we are sending. POST is telling the server that the incoming request has data coming with it. You use a POST request when you sign up for an application, send an email, send a tweet, post on a wall, etc. POST sends data through HTTP to the server, which might send the data to the database to be stored.
 2.   /one will be the endpoint/route we are using. Our route will be named http://localhost:3000/test/one. After that, we'll run a callback function, which will fire off a response.
 3.   When the client requests the given endpoint, we simply send a string in our response.

KEY POINT: Notice that we are not yet talking to our model or database. We are simply sending an empty POST and returning a string response.


! Section 3 Notes

 1   We import the test model and store it in TestModel variable. It is convention to use Pascal casing (uppercase on both words) for a model class with Sequelize. You'll find this to be true in other programming languages as well.
 2   testData is going to have a fixed string that we'll use every time a POST request comes in.
 3   We use the TestModel variable to access the model that we are using. This will grant us access to the Test model properties and to Sequelize methods.
 4   .create() is a Sequelize method that allows us to create an instance of the Test model and send it off to the db, as long as the data types match the model.
 5   We pass the value of testData down to satisfy the key/value pair for the model. The string that we are sending will be the value that's stored in the variable. Currently, it is the string Test data for endpoint two;
 6   testdata is the key in the object, and it represents the column being used in the table.


! Section 4 Notes

Here we use the req.body middleware provided by Express and append two more properties to it. This is what we're sending to the database. req is the actual request, and body is where our data is being held. testdata is a property of body, while item is a property of testdata. We'll see this in Postman in a little while.
create() is a Sequelize method. It creates a SQL statement that will insert our data into the database. 


! Section 5 Notes
1. We call the  .then()  method. As you'll read in the the MDN docs, the  .then()  method returns a Promise. Hence, we use this asynchronous function to force the message to wait for the insert statement to finish. 

2. The callback function will print the success message to the console once testData is done running.

! Section 6 Notes

1. It's important to note that the .then() method is chained to .create(). In fact, the whole expression could be read like this in one line:
   
2. With that idea in mind, we have changed the data coming back in the response to the data that was persisted in Postgres. To be clear, after the data is persisted in the Postgres with the .create() method and in the testdata column, the .then() method returns a Promise that fires up a callback function holding the data that was just added.

! Section 7 Notes

1. In our callback, rather than res.send(), we will invoke the .json() method. This will, of course, package our response as json.
2. The same object that was added to the database is now being sent back to the client and stored in a testdata property.

! Section 8 Notes

1. The addition that we've made here is an error function. If the create() function returns an error, it will be picked up by the createError() method. That method will then send back a 500 error with a message.

*/