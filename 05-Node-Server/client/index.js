function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text();
        })
        .then(function (text) {
            console.log(text);
        });
}

/*
! POST long hand: /one
*/
function postToOne(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.text()
        })
        .catch(
            function(error){
                console.log('Error:', error)
            })
            .then(
                function(response){
                    console.log('Success:', response);
                })
}

/*
! POST /one: Arrow Function (doesn't work for some reason, says Headers is an invalid name.. moving on)
*/
function postToOneArrow() {
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.text())  //2
    .catch(error => console.error('Error:', error))  //3 
    .then(response => console.log('Success:', response));  //4
}

/*
! POST data
*/
function postData() {
    //1
    let content = { testdata: { item: 'This was saved!'} };

    //2
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)  //3
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
        //4
        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}

/*
! GET from /one - Display Data
*/
function fetchFromOneDisplayData(){
    //1
    let url = "http://localhost:3000/test/one";
    let dataView = document.getElementById('display-one');

    //2
    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.json()
        })
        .catch(
            function(error){
                console.error('Error:', error)
            })
            .then(
                function(results){
                    let myList = document.querySelector('#getjson'); //3

                    for (r of results){  //4
                        console.log('Response:', r.testdata); //5
                        var listItem = document.createElement('li'); //6
                        listItem.innerHTML = r.testdata; //7
                        myList.appendChild(listItem); //8
                    }
                })
}


/*
! Post arrow one notes
1.    We're reaching out to an endpoint with a POST request. We add the appropriate headers.
2.    We are asking for a plain text response.
3.    We handle an error, if there is one.
4.    In the end, we simply print the data to the console.

*/

/*
! Post data notes
1.    We set up an object, just like we would have in Postman. We have a preset string as the value of the item property.
2.    We target specific ids in the DOM. These elements will hold the value of the response that comes back after the post is stored.
3.    We pass in our pre-defined object into the fetch call within the body property. Notice the method property is now POST instead of GET
4.    The response comes back and is printed to the console, and it is also displayed to the user along with a timestamp. We access separate values by calling text.testdata. In the DOM, the innerHTML property allows us to take the plain text that we get back and display it in the targeted element.



! GET from /one - Display Data notes

1.    We set up our URL in one variable and target the data-one id in the DOM in another one.
2.    We create a fetch() with Headersand therequest method of GET. There are also chained promises that handle the data when it returns or handle an error if one comes back.
3.    Inside the final .then(), we are going to work towards showing the returned data in the DOM. We start by targeting the getjson id in the DOM and attaching the value to the myList variable.
4.    We set up a for of loop.
5.    We write a console.log() statement to show how we can access the values that come back in the object inside the response.
6.    We create another variable called listItem. The createElement() method will create that type of element in the DOM. In this case, we create a list item, li, every time we iterate.
7.    Each time we iterate, we store the value of r.testdata in the newly create li.
8.    We call appendChild on myList, which means that each time we iterate we put the li into the unordered list.

Just to succinctly summarize the last then():

    We target a list, myList.
    We iterate over the response object with a for of loop.
    Each time we iterate, we create a list item.
    The value gets stored in the innerHTML of the li.
    We append the list item to an unordered list.
    We continue until we get to the end of the response object.

*/