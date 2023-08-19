function getID(str) {
    return document.getElementById(str)
}

// search button function
function redirectToSearchPage() {
    var searchQuery = getID('search-query').value
    location.href = '../search_page/search.html?' + searchQuery
}

var searchIcon = getID('search-icon')
searchIcon.onclick = function () {
    redirectToSearchPage()
}

var sq = document.getElementById('search-query')
sq.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        redirectToSearchPage()
    }
});

// set search input to searchQuery
var searchQuery = (window.location.search).replace('?', '')
var searchInput = document.getElementById('search-query')
searchInput.value = searchQuery

// api call
async function fetchAPI() {
    const apiUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
        results = data.meals.length
        return results
    } catch (error) {
        console.error('Fetch error:', error)
        return 0
    }
}

// fetchAPI()
    // .then(results => {
        // updateResults(results)
    // })
updateResults(2)
function updateResults(results) {
    var totalResultsLabel = getID('total-results')
    totalResultsLabel.innerHTML = `${results} results for ${searchQuery}`
}


