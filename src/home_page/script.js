function get(str) {
    return document.getElementById(str)
}

// search button function
function redirectToSearchPage() {
    var searchQuery = get('search-query').value
    location.href = '../search_page/search.html?' + searchQuery
}

var searchIcon = get('search-icon')
searchIcon.onclick = function () {
    redirectToSearchPage()
}

var sq = document.getElementById('search-query')
sq.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        redirectToSearchPage()
    }
});