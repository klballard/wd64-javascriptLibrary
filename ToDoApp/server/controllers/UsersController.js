

const UsersControllerRouter = Router();

//CRUD-DY CODE FOR USERS
// C - Create a user by registration (url): "/register"
// R - Read the user profile         (url): "/profile", "/login"
// U - Update the user information   (url): "/update"
// D - Delete the user               (url): "/delete"

// Kinds of requests:
// POST - Create new info, insert info into db
// GET - Retrieve info, or pull info from the db (give me an HTML doc)
// PUT - Modify existing info
// DEL - remove data from the db

UsersControllerRouter.post('/register', (request, response) => {
    //PROCESS: retrieve the data from the body of the request
    // use that data to craft a USER
    // save the USER to the database
    // respond with the status of the action

    response.json({
        message: "Hello from the user Register route!"
    });
});

UsersControllerRouter.post('/login', (request, response) => {
    //PROCESS:
    // retrieve the data from the body of the request
    // verify the user exists, and the data matches what is in the record
    // if so: respond with a token
    // if not: respond with an error

    let { email, password } = request.body; //this is the same as the 2 lines below. OBJ DESTRUCTURING allows us to pick and choose which values we grab
    //let email = request.body.email;
   // let password = request.body.password;

    response.json({
        message: "Hello from the user Login route!"
    });
});

// TODO: Implement the following routes: "profile", "update", "delete"

module.exports = UsersControllerRouter;