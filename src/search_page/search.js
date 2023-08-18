function getID(str) {
    return document.getElementById(str)
}

// set search input to searchQuery
var searchQuery = (window.location.search).replace('?', '')
var searchInput = document.getElementById('search-query')
searchInput.value = searchQuery

// api call
const apiUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// update total results
var totalResults = getID('total-results')
totalResults.innerHTML = `12 results for ${searchQuery}`

