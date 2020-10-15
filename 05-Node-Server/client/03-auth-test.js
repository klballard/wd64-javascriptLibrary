function fetchAllFromAuthRoute() {
    const fetch_url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken') // since we stored our token in localStorage, we can access it by using the getItem method to get it back from localStorag and put it in a variable. Note that we could also use out getSessionToken() method for this task.

    const response = fetch(fetch_url, {
        method: 'GET', // by default, fetch runs a GET request. we can use the method property to send other requests. in this case, we're  still sending a GET.
        headers: {
            'Content-Type': 'application/json', //the content type header tells the server what kind of data is being sent in our preflight request, if any.
            'Authorization': accessToken // the Authorization header provides some sort of encrypted data allowing access to the server. In this case, our token.
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

/*
! FETCH/POST to Auth/Create
*/
function postToAuthRouteCreate() {
    const fetch_url = 'http://localhost:3000/authtest/create'
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value; // we will be using an input field in the DOM for this exercise, so we will grab whatever string that a user passes into that field.
    let authInputData = { authtestdata: { item: authTestDataInput } }; // we package that value up into an object. Notice this object is similiar in syntax to waht we did with Postman when posting data.
    const response = fetch(fetch_url, {
        method: 'POST', //we are identifying this method as a POST request. If struggling with http request problems, check the HTTP verb and ensure you're using the right one. Since this server endpoint requires a POST request, we have to send the data as a POST request. GET would not work because we did not write our server endpoint as a GET request.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData) // we package up the object as a JSON string and add it to the body of our request. The JSON.stringify() method will take a JS object and convert it to JSON
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

/*
! GET ITEM BY USER
*/
function getOneByUser() {
    let postIdNumber = document.getElementById("getNumber").value; // we get the postIdNumber provided in the getNumber field. Because we are making an authenticated request, this id has to exist in the database, as well as match the user.id from the database for the user that you are currently logged in as
    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}` //we pass the postIdNumber into the url with a template literal ``
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            var myItem = document.getElementById('getItemValue'); // we target an element called getItemValue. It's a label tag
            myItem.innerHTML = response.authtestdata; // we set the value of the label to the value of response.authtestdata. This means that the data will be populated in the label when the DOM loads.
        })
}

/*
! PUT to authtest/update/:id
*/
function updateItem() {
    let postIdNumber = document.getElementById('updateNumber').value;
    let authTestDataInput = document.getElementById('updateValue').value; //we get the value of the input provided from the user for both the updateNumber and updateValue fields and assign each to a variable
    const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}` // like before, we pass in the input from the user to the url with a template literal
    const accessToken = localStorage.getItem('SessionToken')

    let authInputData = { authtestdata: { item: authTestDataInput } }; // we create an object that packages up our request. we capture the value of authTestDataInput and store it in the variable authInputData variable
    const response = fetch(fetch_url, {
        method: 'PUT', // we are doing an update method, so this will be a PUT request
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData) // just like we did in past POST methods, we use the stringify method to convert the object to a JSON object.
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data) // we print the response to our fetch to the console.
            var myItem = document.getElementById('newItemValue') // we make a reference to the label in step 12 (update single item), then set its value to the data we put in the database
            myItem.innerHTML = data.authtestdata; // see above
            fetchAllFromAuthRoute(); // we run the getall function again and print the new contents of the database to the console.
        })
}

/*
! GET to update/display item
*/

function showCurrentData(e) { // e is the default variable name for an Event Listener. Here, e represents the input field updateNumber, which was passed as a parameter using this on the HTML page
    const fetch_url = `http://localhost:3000/authtest/${e.value}` // we pass the value of the input field supplied by the user directly into the URL with a template literal. Because e is already defined as the input field, we don't need to use a function to get another reference to it.
    const accessToken = localStorage.getItem('SessionToken')

    fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            var myItem = document.getElementById('updateValue'); // we call the DOM element we want to modify and set it to a variable to be accessed later
            if (!response) return; // if no item in the database matches the id we've supplied, the response comes back undefined. A blank return statement tells the program not to return anything and just to move on. Remember that not only does the id have to match what's in the database, but user.id also has to match the owner property, signifying that the current user is the one who entered it.
            else myItem.value = response.authtestdata; // we could use the innerHTML to set the value, but that method doesn't work with <input> elements. Instead, we use the value to insert our data into the field.
        })

}

/*
! Deleting an item
*/

function deleteItem() {
    let postIdNumber = document.getElementById("deleteNumber").value;

    const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}` //again we get the ID number submitted by the user and pass it into the url via a template literal
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE', //our HTTP verb here is DELETE in this case, so we use the DELETE method to match.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => { // we print the response to the console and also run the fetchAllFromAuthRoute function again, which will print all remaining items for our user to the console.
            fetchAllFromAuthRoute()
        })
}

/*
! deleteItemById() func
*/
function deleteItemById(paramNum) { // the id of the <li> is passed into this function as a parameter, which is then added to the url via a template literal.
    const fetch_url = `http://localhost:3000/authtest/delete/${paramNum}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            console.log(response); // print the response to the console
            fetchAllFromAuthRoute(); // run the getall function again to print the remaining items in the database to the console
        })

}


/*
! Displaying all items for a user
*/
function fetchFromOneDisplayData() {
    const url = 'http://localhost:3000/authtest/getall';
    const accessToken = localStorage.getItem('SessionToken')

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    }).then(
        function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.log('Error:', error)
            })
            .then(
                function (response) {
                    let text = '';
                    var myList = document.querySelector('ul#fourteen'); // this is a different way of making reference to a DOM element. We're aiming for a <ul> element with an id of fourteen (the # signals the program to look for an id rather than a class)
                    while (myList.firstChild) { // this should look familiar to you. this is the same way we cleared out the <section> elements in the NYT api project
                        myList.removeChild(myList.firstChild)
                    }

                    console.log(response);
                    for (r of response) { // we use a for of loop to iterate through the values of each key: value pair
                        var listItem = document.createElement('li'); // given that we're working with a <ul> element, each loop will create a different <li>
                        var textData = r.id + ' ' + r.authtestdata; //we create a string with the id and authtestdata properties, then put that string into the <li> element
                        listItem.innerHTML = textData;
                        listItem.setAttribute('id', r.id); // we add the property of each object as an id for each <li>. this will allow us to call them indivdually later.
                        myList.appendChild(listItem); // the <li> child element is added to the end of the <ul> parent element.
                        myList.addEventListener('click', removeItem); // we add our custom listener to run whenever an <li> is clicked
                    }
                }
            )
}

/*
! removeItem() on click func
*/
function removeItem(e) {
    console.log(e); //print to the console to check which item we're clicking on
    var target = e.target; // target is a nested object within e. This places that object inside its own variable
    if (target.tagName !== 'LI') return; // if the item we're clicking on isn't an <li> element, the empty return statement exits the conditional.
    else target.parentNode.removeChild(target); // we remove the <li> child from the <ul> parent.

    let x = target.getAttribute("id") // earlier we set an id for the <li>. Now we get it back so we can pass it to the DELETE request
    deleteItemById(x); //this will become our DELETE request. In order for us to test what we have so far, we just print x to the console
 //   console.log("The id number for this item is " + x);
}