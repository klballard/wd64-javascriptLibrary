/* Data and Structure Types

Primitive Data Types
    -Boolean 
    -undefined
    -number
    -string
        -bigInt*
        -symbol*
    -null
    -object
    -function

*/

// BOOLEANS //

//a boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);


// NULL //

// think of it as an empty value, a container with space to fill //

let empty = null;
console.log(empty);

// UNDEFINED //
// no value has been assigned to a container

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/*
    -Null is an empty container, specifically set to be empty
    -Undefined is when a variable has never been set, or hasn't been created

    Null is an intentionally empty value. Undefined as, not having been set up
    Null you can trust. Undefined you cannot.
*/


// NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;  // 15 #'s
console.log(precise);

let rounded = 9999999999999999; // 16 #'s
console.log(rounded);

// Javascript gives us space for 15 #s before rounding up

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// 35 rounds out at a certain number, so if math is needed, be aware

let whatIf = (0.2 *10 + 0.1 *10);
console.log(whatIf);
let numbersAreHard = (0.2 *10 + 0.1 *10) / 10;
console.log(numbersAreHard);
// console.log('.' + whatIf);

// STRINGS

// represent text. can be wrapped in 'single' or "double" quotes

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ);

// NUMBERS VS STRING
let addThese = 1050 + 100;
console.log(addThese);
//this adds the numbers normally
let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
// Adding strings together produces "1050100", adding the strings together
console.log(typeof addThese);
console.log(typeof addTheseAlso);
//the operator "typeof" shows us what type our variable is

let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber);

const log = console.log
// Creates a constant variable for log to = console.log, saving a bit of time
log(stringToNumber);
// 102 produces the same output as 97

// OBJECTS
/*
    -Objects are used to store many values instead of a singular value.
    -Consider these as a collection of various properties
    -denoted by curly brackets { }
*/

let frodo = {
    race: 'hobbit', //string
    rings: 1, //number
    sting: true, //boolean
}

console.log(frodo);
console.log(typeof frodo);
//118 - Key
//119 - Value

let obj = {
    key: 'value'
};

console.log(obj);

// ARRAYS
/*
    Containers that can hold multiple items, denoted by [ ] square brackets
    Each item in the array is separated by a comma ,

*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three', true];
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own.

let objArr = [{
    race: 'hobbit', //string
    rings: 1, //number
    sting: true, //boolean
}]

console.log(objArr);

// ADDITION vs CONCATENATION
/*
    - JS sees the + symbol in two ways.
        -Addition wise, such as 1 + 2 = 3
        -Or by "joining them", such as 1 + 2 = 12
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);


// PRACTICE

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Kyle';
let lastName = 'Ballard';
let houseNumber = 3641;
let street = 'Premier Drive';
let city = 'Columbus';
let state = 'Indiana';
let zipcode = 47203;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);
let myAddress = [houseNumber, street, city, state, zipcode];
console.log(myAddress);


// STRING PROPERTIES

/*
    -Strings have properties, or qualities, associated with that string
    -the length of a string is a property
*/

let myName = "Kyle";
console.log(myName.length);


// STRING METHODS
/*
    -methods are tools that can help us manipulate our data
*/

let myNameIs = 'Bob';
console.log(myNameIs.toUpperCase());   // this is a method that changes a string to upper case
console.log(myNameIs.toLowerCase());

let home = 'My home is Fishers';
console.log(home.includes('Fishers'));

