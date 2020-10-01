/*

! ...SYNTAX   

keyword variableName = [...arrayName];

*/

const nameOne = ['Kyle', 'Ballard'];
const nameTwo = ['Mister', 'Manager'];
const copiedNames = ['John', 'Schmidt', ...nameOne, ...nameTwo];
console.log(copiedNames);

const copiedNamesDiff = ['John', 'Schmidt', nameOne, nameTwo];
console.log(copiedNamesDiff);

/*
    Since the spread operator is pulling out all the items of an array, we need to make sure we use the spread operator within a new array. This is so the values that were pulled out gets placed into the new array.

    ...arrayName (if not within the array, will throw error)

    - We can add to our original array without altering the copied array.
        -dependent on what data types we're using
*/

nameOne.unshift('Mr');    //this adds 'Mr' to the beginning of the array (index 0)
console.log('Altered: ', nameOne, 'Spread: ', copiedNames);


/*

! ...NUMBERS

*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices));  //expects numbers, not an array. thus returns NaN (not a number)
console.log(Math.min(...prices)); //spread operator pulls elements out of the prices array, to allow the min method to work

/*

! ...OBJECTS

*/

const persons = [
    {
        name: 'Lore',
        species: 'Android'
    },
    {
        name: 'Picard',
        species: 'Human'
    },
];

const copiedPersons = [...persons];
console.log(copiedPersons);
persons.push({name: 'Worf', species: 'Klingon'});
console.log('Obj', persons, 'SO', copiedPersons);
// We are ONLY changing the original array (with push).

/*
    -primitive variable = primitive value
        ex: 
        let x = 10;
        let y = 'abc';
        let z = null;

    - JavaScript stores to memory both variables and values:
        Variables    Values
        x            10
        y            abc
        z            null

        ex:
        let a = x;
        let b = y;
        console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'

        - Altering one won't affect the previous
        a = 5;
        b = 'xyz';
        console.log(x, y, a, b) -> 10, 'abc', 5, 'xyz'

    - Three Data Types that are passed by reference: Array, Functions and Objects
        - technically objects
        - non primitive variables are given a reference to a value - the reference points to the location in memory

        * pretend datatype: address - denoted by < >

        let arr - [];
        arr.push(1);

        *- How that code above would look in memory

        VARIABLES    VALUES    ADDRESS   OBJECT
        arr          <#001>    #001      []
        arr          <#001>    #001      [1]

--------------------------------------------------------------------------------------

        let ref = [1];
        let refCopy = ref;

        *How this would look in memory
        VARIABLES    VALUES    ADDRESS   OBJECT
        ref          <#001>    #001      []
        refCopy      <#001>              

        ref.push(2);
        console.log(ref, refCopy) -> [1,2], [1,2]
*/

copiedPersons[0].name = "Data";
console.log('Obj', persons, 'SO.', copiedPersons);

/*

! ... & AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY

*/

const comics = [
    {title: 'Spider-Man', year: 1962}, {title: 'Detective Comics', year: 1939}
];

const copiedComics = comics.map(comic => ({       // JS at this moment saves a carbon copy in memory of the comics array
    title: comic.title,                      // The map method returns arrays, depending on the function "comic =>"
    year: comic.year
}));

comics.push({title: 'Calvin and Hobbes', year: 1985});
console.log('Before Altering: ', copiedComics);
copiedComics[1].title = 'Detective Comics #27';
console.log('After Altering: ', comics, copiedComics);