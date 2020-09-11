/* VARIABLES */

console.log('hello');
// this is a debugging tool 

let a = 2;

/*
- let is our KEYWORD
- a is our name of the variable
- 2 is our variable VALUE
*/

let b = 1;

console.log(a + b);

//? RESTRICTIONS
/* 
    - a variable name must being with a letter, underscore or dollar sign
    - numbers may follow the above characters BUT cannot come first
    - javascript is case sensitive - 'hello' and 'Hello', these would be different variables
    - no spaces are allowed in variable names
    - best practice is camelCase typically
    - ex: 
        let myName = 'Eric';
        is easier to read than
        let myname = 'Eric';

*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithDollarSign = "Works";
// let 4startWithNumbers = "Breaks";

console.log(startingWithLetter, _startWithUnderscore, $startWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;

/*
KEYWORDS

var, let, and const

    - var: 'old' keyword that stands for variable ** we won't be using this often but still viable

    - let: 'new' keyword for variable. 

    - const: also 'new' keyword that declares an unchangeable, or constant, variable

*/

var variable = 'var variable';
let letVariable = 'let variable';

// let function = 1; Cannot used reserved words within variable names - function is a reserved word.

/*

DECLARATIONS and INITIALIZATIONS

*/
// Declarations are the LEFT SIDE of the assignment operator
let p;

let x = 10  // Initializing is the RIGHT SIDE of the assignment operator, "10"

let y;
console.log('declaration', y);

y = 10;
console.log('initialization:', y);

y = 33;
console.log('initialization 2:', y);

// We've set our variables with our 'let' keyword. With each iteration, we've declared what it is.

// CONST

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa)

today = 'Awesome!'
console.log(today, efa);

efa = 'Super';
console.log(today, efa);
//const allows us to make a variable that we don't want to change

