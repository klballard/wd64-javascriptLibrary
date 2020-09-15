/*

! ARROW FUNCTIONS

    Arrow functions are expressional functions.

    - The main goal is to generate a shorter syntax for writing a function
    - Two different forms:
        1. Concise
        2. Block body

-----Arrow functions also DO NOT get hoisted.

---- THEY ARE ALWAYS ANONYMOUS FUNCTIONS

*/

function regFunc() {
    console.log('Regular');
}
regFunc();

//   (1)        (2)(3)    (4)
let arrowFunc = () => console.log('Arrow Func');
arrowFunc(); // still need to invoke our function

/*
    Parameters are still capable of being injected
        -if we have 1 parameter, we technically do not need the parenthesis ()
        -BUT if we re not passing any parameters, it is REQUIRED to denote ()
    This syntax tells JS that we are about to process a function
    Within this format, JS assumes the return statement.
*/

arrowFunc;

// ? CONCISE AND BLOCK BODY

//* Concise:

let cBody = (x, y) => console.log(x + y);
cBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log (`${x} and ${y} are where we want them`);

slightlyComplex(3,1);
slightlyComplex(1,5);

//* BLOCK:
// The 'return' keyword is required. We also include the curly braces.

let blockArrow = (x,y) => {
    return `${x} are within a ${y}`;
}
console.log(blockArrow('We', "Block Body"));

let sampleBlock = x => {
    console.log(x);
}

sampleBlock(99);