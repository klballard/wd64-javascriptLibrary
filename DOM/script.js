let x = 10;
console.log(x);

//! 1: getElementById

//console.log(document);
//console.log(document.body);

//document.getElementById('testParagraph').style.color = 'blue';

let testPara = document.getElementById('testParagraph');
testPara.style.color = 'red';
console.dir(document);

// Will only get the first ID

//! 2: Query Selector All & innerText/innerHTML

console.log(document.querySelectorAll('p.sampleClass'));
//querySelectorAll returns a NodeList
// nodes are items in HTML like elements and text

document.querySelectorAll('p.sampleClass')[2].innerText = 'My text has changed!';
document.querySelectorAll('p.sampleClass')[2].id = 'No 3';
console.log(document.querySelectorAll('p.sampleClass')[2]);

// Bracket notation to access the array of elements
// innerText allows us to reference or change the text in that element

let changeAll = document.querySelectorAll('p.sampleClass');
// 30 sets up a variable to select each of those P tags
changeAll.forEach(pTag => {
    //pTag.innerText = 'My text has changed using a forEach() method.';
    //pTag.textContent = 'My text has changed using a forEach() method.';
    pTag.innerHTML = 'My text has changed using a forEach() method.';
});
// 32-36 edits those P tags

let showSpan = document.getElementById('spanTest');

console.log(showSpan.innerText);    //shows the visible text
console.log(showSpan.textContent);  //shows ALL text
console.log(showSpan.innerHTML);   //shows text + SPAN html info


/*
    - innerText simply references or allows us to change the text of a specified element. Will return only visible text in a 'node'.

    - textContent does the same thing that innerText does, but will return the FULL text of a 'node'.

    - innerHTML allows us to see text as well as HTML elements, which will be nested inside of the current HTML element we're referencing. 

*/


//! 3: ADDEVENTLISTENER - click
/*
let btn = document.getElementById('clickThis');

btn.addEventListener('click', event => {
    event.target.style.backgroundColor = 'green';
    event.target.innerText = 'CLICKED';
    console.log(btn);
});

btn.addEventListener('')
*/

//! TOGGLING CODE USING click
let red = true;
let btn = document.getElementById('clickThis');

btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    red = !red;
});

//! 4. ADDEVENTLISTENER - keyup

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    console.log(e.target.value);
   // console.log(document.getElementsByTagName('p');
  //  )};
  document.getElementsByTagName('p')[0].innerText = 'Something Changed!';

  if(e.target.value == '') {
      document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...'
  } else {
      document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
  }
});

