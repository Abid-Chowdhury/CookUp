function get(str) {
    return document.getElementById(str)
}

// search button function
function redirectToSearchPage() {
    location.href = '../search_page/search.html'
}

var searchIcon = get('search-icon')
searchIcon.onclick = function () {
    // var searchQuery = get('search-query')
    // console.log(searchQuery.value)
    redirectToSearchPage()
}