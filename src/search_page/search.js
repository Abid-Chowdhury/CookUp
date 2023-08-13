function getID(str) {
    return document.getElementById(str)
}

// set search input to searchQuery
var searchQuery = (window.location.search).replace('?', '')
var searchInput = document.getElementById('search-query')
searchInput.value = searchQuery

// update total results
var totalResults = getID('total-results')
totalResults.innerHTML = `12 results for ${searchQuery}`

