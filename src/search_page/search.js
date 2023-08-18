function getID(str) {
    return document.getElementById(str)
}

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
        return data.meals.length
    } catch (error) {
        console.error('Fetch error:', error)
        return 0
    }
}

fetchAPI()
    .then(results => {
        updateResults(results)
    })

function updateResults(results) {
    var totalResultsLabel = getID('total-results')
    totalResultsLabel.innerHTML = `${results} results for ${searchQuery}`
}


