/* 

! HOISTING

    What is hoisting?
        -JS pulls all variables and function calls to the 'top' of their respective scope prior to being executed.
        -Only the declaration is pulled up, NOT the assignment.
        ! Think of it like a table of contents - we can see the Chapter Names but not any more info

*/

//console.log(hoistedVar);

//console.log('How JS sees hoistedVar: ', typeof hoistedVar);

//var hoistedVar = 'using var';
//let hoistedVar = 'using let';      //let keyword does NOT let you hoist

//console.log(noVariable);

//? Hoisting in a Function
// This process is considered the same within a function. On first pass, it reads it, pushes declarations to the top, and then executes them in the order there are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope";
    console.log('Prior to declaring ', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc)
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of whether they are in a function or a global scope. This makes it clear how it should be handled.

//? Using LET
// the keyword 'let' is block scoped and not function scoped.

//console.log(letVariable);
//let letVariable = 'Using Let';
// This thows a ReferenceError due to ES6(newest JS version) not accepting undeclared variables. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Function
// Function Declarations:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function');
}

// Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?');
}
