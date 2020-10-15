const { Router, response } = require('express');
const Express = require('express');

const applicationSequelizeObject = require('./db');
const ApplicationControllers = require('./controllers/index');


const expressApplicationObject = new Express();

expressApplicationObject.use('/test', ApplicationControllers.test);
expressApplicationObject.use('/users', ApplicationControllers.users);

expressApplicationObject.get('/', (request, response) => {
    console.log('[server]: Root GET request received');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log('[server]: Response being dispatched ->');
    response.send('Root Route Hit, hello from the todo server')
});



// Startup Procedure
// Verify the connection to the POSTGRES database
// Synchronize our database with our models
// listen on our specified port

applicationSequelizeObject.authenticate()
    .then(() => applicationSequelizeObject.sync())
    .then(() => {
        expressApplicationObject.listen(9001, () => {
            console.log('[server]: App is listening on port 9001');
        });



    })
    .catch((err) => {
        console.log(err);
    });



// JSON in a request is a STRING
/*
expressApplicationObject.use(Express.json());

expressApplicationObject.post('/challenge', (request, response) => {
    let data = request.body;
    let message = data.age >= 18 ? `${data.name}, you are an adult!` : `${data.name}, you will be an adult eventually!`;

    response.send(message);
});



challenge receive a POST request at the route /challenge
takes two values inside of the body:
 name - string for a name
 age - a number for the age
 Respond with a this message:
 if the user is 18 and older, the message will be "<name>, you are an adult"
 otherwise, the message will be "<name>, you will be an adult soon"

router.post('/challenge', function (req, res) {
    var name = req.body.user.name;
    var age = req.body.user.age;

    User.create({
        name: name,
        age: age
    }).then(
        function checkAge(age) {
            if(age < 18) {
                res.send(`${name}, you will be an adult soon`)
            } else(age > 18) {
                res.send(`${name}, you are an adult`)
            }
        }
    );
});

*/
