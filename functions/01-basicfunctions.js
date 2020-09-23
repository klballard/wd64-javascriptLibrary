/*

! FUNCTIONS

 Functions are processes we can call upon to perform an action
    - Take in input so that it can process it, modify it or just respond to it
    - Returns a value, but not always
    - Can be invoked or called upon as often as needed
*/


// (1)    (2)
function hi(){
    console.log('Hi!');
}
/*
1 Keyword  2 Name of the function and parenthesis for parameter

/ 1          2       3
function functionName() {
/    4
    return value
};
/   5
functionName()
*/
// (1) Keyword
// (2) Name of the function *whatever you want, really
// (3) Parameters
// (4) Statement to process
// (5) Invocation "on switch"

// ? Function Declaration
// A chunk of code that performs a set of actions when it is invoked.
function funcOne() {
    console.log('Statement Here');
};
funcOne();

// ? Function Expression
// Assigning a function to a variable is what is called an EXPRESSION
let first = function funcTwo() {
    console.log('Second Statement');
};

first ();


// ? Anonymous Function
// Anonymous functions are stored in memory but the runtime doesn't automatically create a reference to it.

let anon = function() {
    console.log('anon function');
};

anon();

// ? Parameters
// Allows us to accept information already declared.

function parameterFunc(num) {      //num is a placeholder here. can be anything
    console.log(num);
}

parameterFunc(2);
parameterFunc(9);

let returnedVal = 5;
parameterFunc(returnedVal);

let firstName = "Jane";
let lastName = "Doe";

function greeting(first, last) {
    console.log(`Hello, ${first}`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter ${last}`);
}

//greeting(firstName);
//greeting(lastName);
greeting(firstName,lastName);



// REPL Pratice for loops and functions
let i = 0;

for(let i = 0; i <= 10; i++);

function isEven(i) {
    i = Number(i);
    return i === 0 || !!(i && !(i%2));
}
function isOdd(i) {
    return isEven(Number(i) + 1);
    console.log('the number is odd');
}

for ( let j = 0; j <= 10; j +=2) {
    console.log(j);
  }

  let count = 0;
  for ( ;  count < 9; ++count ) {
    console.log(count);
  }



