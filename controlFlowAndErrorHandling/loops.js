/*

! LOOPS

    -loops help us repeat a process without writing a lot of code

    We need to:
        1) Create an index
        2) Run a condition
        3) Change the indexing variable (execution of condition)
*/

for(let i = 0; i <= 10; i++) {
    console.log(i);
}


/*

    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against
        (index; condition; change index -> result)

        for(<create index variable>; <run condition>; <change index>) {
            <return results>
            *will continue until run condition is met
        }
*/

/*
let x = 20;

for(i = 10; i <= x; i++){
    console.log(i);
}

*/

for(i = 2; i >= -10; i -= 4) {
    console.log(i);
}

let word = 'supercalifragilisticexpialidocious';

for(let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
}


/*
! FORIN LOOP

*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true,
};

for(info in city) {    //"INFO" on 61 and 62 are placeholders, name with organization in mind
    console.log(info);
    console.log(city[info]);
};

/*
    for(variable IN object) {
        <statement>
    }



*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
    console.log(list[item]);
};


//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName;

for(char in name) {
    console.log(char);
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
}

console.log(fullName);


/*
  1) We are taking the value of the "n" index and declaring the position of 0
  2) We assign our empty varibale to equal that positioned value.
  3) If that index is 0, we will take that value and run a ".toUpperCase()"" method on it. 
  4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
  5) If the index is NOT 0, we want t run a ".toLowerCase()" method so that all letters are in proper case.


/*

! FOR OF LOOPS

    -In order to run a FOR OF loop, the "thing" must be numbered like an array

    let object ={
        key: value,
        key: value,
        key: value,
    };

    for(o of objects) {                       "o" being a placeholder like above
        <breaks>
    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}

/* 
? Quick Recap:
    for loop: loops pass through a block of code until the counter reaches a specified number
    for in loops: loops through properties of an object
    for of loops: loops over iterable objects as an arrays and strings *strings can be accessed much in the same way as arrays
*/


//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 100;

switch (true) {
    case grade >= 89 && grade <= 100:
        console.log("Congratulations, you did excellent!! A!");
        break;
    case grade >= 79 && grade <=88:
        console.log("Overall, not (B)ad at all! You passed!");
        break;
    case grade >= 66 && grade <= 78:
        console.log("C! Average, but room for improvement.");
        break;
    case grade >= 59 && grade <= 65:
        console.log("D. I'm sorry, but you're not quite there.");
        break;
    default:
        console.log("F for effort. Keep practicing!");
        break;
}
