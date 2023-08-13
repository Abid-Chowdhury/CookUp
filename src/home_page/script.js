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