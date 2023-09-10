function getID(str) {
    return document.getElementById(str)
}

// search button function
function redirectToSearchPage(query) {
    location.href = '../search_page/search.html?' + 'ing=true&' + query
}

var searchButton = getID('search-container')
searchButton.onclick = function () {
    redirectToSearchPage(getSelectedRadioValues())

}

function getSelectedRadioValues() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    var selectedValue = '';

    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            return selectedValue = radioButton.value
        }
    });

    return selectedValue;
}
