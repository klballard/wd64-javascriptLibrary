/*
! POST /create user
*/

function userSignUp(){
    let userName = document.getElementById('userSignUp').value; //here, we grab the value of the user/pw data from the createuser input field in the index.html file
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = {user : { username: userName, password: userPass}}; //the variables used to store the sign up info from the DOM get passed into the values of the username and password properties. We package everything up in a user object
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData) // in the request object in our fetch call, we pass the newUserData variable to be sent off in the body of our request to the server
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken; // we get the sessionToken from the response and store it in a variable
        localStorage.setItem('SessionToken', token);
    });
}


function userSignIn(){
    let userName = document.getElementById('userSignIn').value;
    let userPass = document.getElementById('passSignIn').value;
    console.log(userName, userPass);

    let userData = {user: { username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/signin', {  //sign in route used
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}

/*
! HELPER FUNCTION FOR TOKEN 
*/
function getSessionToken(){
    var data = localStorage.getItem('SessionToken');
    console.log(data);
    return data;
}

