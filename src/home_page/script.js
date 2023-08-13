function get(str) {
    return document.getElementById(str)
}

// search button function
var searchIcon = get('search-icon')
searchIcon.onclick = function () {
    var searchQuery = get('search-query')
    console.log(searchQuery.value)
}