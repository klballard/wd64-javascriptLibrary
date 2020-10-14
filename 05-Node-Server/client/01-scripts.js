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
! POST /one: Arrow Function
*/
function postToOneArrow() {
    var url = 'http://localhost:3000/test/one';

    fetch(url, {    //1
        method: 'POST',
        headers: new Headers({
            'Content-Type:': 'application/json'
        })
    }).then(res => res.text())  //2
    .catch(error => console.error('Error:', error))  //3 
    .then(response => console.log('Success:', response));  //4
}

/*

1.    We're reaching out to an endpoint with a POST request. We add the appropriate headers.
2.    We are asking for a plain text response.
3.    We handle an error, if there is one.
4.    In the end, we simply print the data to the console.

*/