const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'brfKVVABMZGhVGaxF4eDG8GfYuIhkvZp'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3


                    //1
function fetchResults(e) {
    e.preventDefault(); //1
// Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };
  fetch(url)
    .then(function(result) {
    return result.json(); //2
    }).then(function(json) {
        displayResults(json); //3
});
}

function displayResults(json) {
    console.log("DisplayResults", json);
}
                      
function nextPage(){
console.log("Next button clicked");
                      } //5
                      
function previousPage(){
console.log("Next button clicked");
                      } //5

function displayResults(json) {
console.log(json.response.docs);
                     };

function displayResults(json) {
    while (section.firstChild) {
    section.removeChild(section.firstChild);
}
    let articles = json.response.docs;

    if(articles.length === 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
      } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
      }
    
    if(articles.length === 0) {
        console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a'); //1
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
      let current = articles[i]; //2  //setting current = the indexed val of articles
      console.log("Current:", current); //3

      link.href = current.web_url; //4   //this refers back to line 84, diving farther into the fetched API using dot notation
      link.textContent = current.headline.main; //5  //refers back to 84

      para.textContent = 'Keywords: ';  // refers back to 86

      for(let j = 0; j < current.keywords.length; j++) {
          let span = document.createElement('span');
          span.textContent += current.keywords[j].value + ' ';
          para.appendChild(span);
      }

      if(current.multimedia.length > 0) {
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
          img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link); //6
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
        }
    }
};

function nextPage(e) {
    pageNumber++; //1
    fetchResults(e);  //2
    console.log("Page number:", pageNumber); //3
 };

 function previousPage(e) {
    if(pageNumber > 0) { //1
      pageNumber--; //2
    } else {
      return; //3
    }
    fetchResults(e); //4
    console.log("Page:", pageNumber); //5
  
  };