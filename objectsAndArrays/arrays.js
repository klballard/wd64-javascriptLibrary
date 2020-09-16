/*

! ARRAYS

*/

//? POPULATING & REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting at 0, then 1 2 3 etc. So in this array, orange is first. Banana 2nd and so on
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. 
// This is called SQUARE BRACKET NOTATION

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

//console.log(typeof students);
console.log(students instanceof Array);  //the instanceof operator is used to check the type of an object at run time.
// Remember that arrays are objects. 

console.log(students[2]);

console.log(`Hello, ${students[1]}`);
console.log(`Hello, ${students[6][2]}`);

//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (foodItem of food) {
    console.log(foodItem);
}

//! Add to the end of our array using PUSH
food.push('Pizza');             // adds Pizza to the end of our Food Array above
console.log('push: ', food);    // simply showing how Pizza has been pushed in the line above
console.log(food);              // Pizza has been added to the end of the Food Array now

//! Removing and Inserting
food.splice(1, 1, 'Bananas');   // Removes Shrimp and adds Banana    (position, how many to remove, what to add)
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice: 2', food);

//! Removing from end
food.pop();                    // pop removes the last item in the array
console.log('pop: ', food);

//! Add to the start
food.unshift('Popcorn', 'Steak');     //Unshift adds one or more elements to the beginning of an array
console.log('unshift: ', food);       // Adding Popcorn and Steak to the start of the array index

//! Remove from start
food.shift();                   // Shift removes an item from the start of an array
console.log('shift: ', food);


//? LENGTH

// We can use a method called length() that can tell us how many values are within our array.

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

let bool = [true, true, false];
console.log(bool.toString());


//? ITERATING
/*
      forEach
        - the forEach() method executes a provided function once for each element in an array - much like a FOR LOOP or a FOR OF LOOP

        - runs three arguments:
            1. The Value
            2. The Index
            3. The array object itself
*/

// ! arrayObject.forEach((value, index) => return);

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

for(let i = 0; i < foodList.length; i++){
    console.log(i, foodList[i]);
}
// We invoke a callback function for each element within our array
foodList.forEach(foodItem => console.log(foodItem));
// A callback function is another function we invoke within our main function

function print(callback) {
    callback();
}

foodList.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
})
//  - the 2nd position of the parameter is ALWAYS the index, even though it can be named anything.

let favMovies = ['O Brother, Where Are Thou?', 'The Big Lebowski', 'Lord of the Rings Theatrical', 'Star Wars OT'];

for(let i = 0; i < favMovies.length; i++){
    console.log(i, favMovies[i]);
}

favMovies.push('Blade Runner 2049');
console.log(favMovies);

favMovies.splice(2, 1, 'The Lord of The Rings Extended');
console.log(favMovies);

favMovies.forEach(favMovies => console.log(favMovies));
