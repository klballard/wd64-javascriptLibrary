//! ASYNCHRONOUS PROGRAMMING
/*
    -synchronous programming code is read line by line
    
    - Asynchronous programming allows a program to do more than one thing at a time
    - Makes it possible to run long-running actions without stopping the program to wait for a response

*/

//? Synchronous Sample
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// 'First Hello' - then 'Second Hello' - then 'End'. Once the one before is completed, the next will execute

//? Asynchronous Sample
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000);     // setTimeout has two arguments: callback (console log) and time measured in milliseconds
};
console.log('Hello World');
networkRequest();
console.log('The End');

// Event loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waiting callback that needs to be executed (our console.log('Async code'))

//! API

/*
    Application Program Interface
    
    - is NOT a database or server
    - Allows us access points to a server
    - Comes in the form of ENDPOINTS
    - Endpoints directs us to sets of data

    ? REST API
    - Representational State Transfer
        - creates an object of requested data by the client, send values in response to user.
    - Methods:
        CRUD
            - Create (POST)
            - Read (GET)
            - Update (PUT)
            - Delete (DELETE)
*/

//! FETCH()
/*
    - The fetch() method is an asynchronous method. Part of the BROWSER and not JAVASCRIPT
    - The fetch() method starts the process of "fetching" a resource. Will return a promise and respond ONCE that promise is fulfilled.

        Promise: 
            - an unknown value when created
            - represents the eventual fulfilled value or rejection (error)
            
            * Promises are always one of these states:
                - 1. Pending: initial state, neither fulfilled or rejected
                - 2. Fulfilled: meaning the operation completed successfully
                - 3. Rejected: meaning the operation failed
*/