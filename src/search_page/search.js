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
        return data
    } catch (error) {
        console.error('Fetch error:', error)
        return 0
    }
}

fetchAPI()
    .then(data => {
        results = data.meals.length
        meals = data.meals
        updateResults(results)
        showResults(results, meals)
    })

function updateResults(results) {
    var totalResultsLabel = getID('total-results')
    totalResultsLabel.innerHTML = `${results} results for ${searchQuery}`
}

function showResults(results, meals) {
    const resultsContainer = document.getElementById('results-container')

    for (i = 1; i < results+1; i++) {
        const resultContainer = document.createElement('div')
        resultContainer.classList.add('result-container')
        resultContainer.id = `result-${i}`

        const imageElement = document.createElement('img')
        imageElement.src = meals[i].strMealThumb
        imageElement.alt = 'recipe image'

        const detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        const h3Element = document.createElement('h3')
        h3Element.textContent = meals[i].strMeal

        const pElement = document.createElement('p')
        pElement.textContent = meals[i].strArea

        detailsDiv.appendChild(h3Element)
        detailsDiv.appendChild(pElement)

        resultContainer.appendChild(imageElement)
        resultContainer.appendChild(detailsDiv)

        resultsContainer.appendChild(resultContainer)
    }
}