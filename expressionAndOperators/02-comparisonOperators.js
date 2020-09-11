//? Equal
'3' == 3;
console.log("3"==3);

/*
    -JavaScript is helpful and does something known as coercion when comparing values
    -above, it is recognized the "3" and 3 are intended as equal

*/

//STRICT EQUAL
console.log("3"=== 3);
console.log(3 === 3);

// Strict equals have to be the same data type, as well as have the same characters

console.log('Bob' === 'bob');
// will be false, as they are not EXACTLY equal "Bob, bob"


//? NOT EQUAL
console.log('3' != 3);  //with coercion mentioned about, JS makes the assumption these are equal so this is false
console.log('35' != 3); //this is now true, '35' does not equal 3

//? STRICT NOT EQUAL
console.log('3' !== 3);

//? GREATER THAN
3 > 2;

//? LESS THAN
2 < 3;

//? GREATER THAN OR EQUAL TOO
3 >= 2;  // => is different, and is actually a "fat arrow function"

//? LESS THAN OR EQUAL TOO
2 <= 3;

//? AND
2 && 3;
"Two" && "Three";
console.log('two' && 'three');

//? OR
2 || 3;