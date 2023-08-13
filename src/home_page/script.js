function get(str) {
    return document.getElementById(str)
}

// search button function
function redirectToSearchPage(searchQuery) {
}

var searchIcon = get('search-icon')
searchIcon.onclick = function () {
    var searchQuery = get('search-query').value
    location.href = '../search_page/search.html?' + searchQuery
}