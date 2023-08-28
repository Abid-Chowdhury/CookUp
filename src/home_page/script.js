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

// api call
async function fetchAPI() {
    const apiUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s=`
    
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        // console.error('Fetch error:', error)
        return 0
    }
}

fetchAPI()
    .then(data => {
        results = data.meals.length
        meals = data.meals
        showSuggestedRecipes(results, meals)
        showAllRecipes(results, meals)
    })

function redirectToRecipePage(recipeID) {
    location.href = '../recipe_page/recipe.html?' + recipeID
}

function showSuggestedRecipes(results, meals) {

    const resultsContainer = document.getElementById('suggestion-cards-container')

    for (i = 0; i < 3; i++) {
        const resultContainer = document.createElement('div')
        resultContainer.classList.add('suggestion-container')
        resultContainer.id = `suggestion-${i}`
        
        var recipeID = meals[i].idMeal
        resultContainer.setAttribute('onclick', `redirectToRecipePage(${recipeID})`)

        const imageElement = document.createElement('img')
        imageElement.src = meals[i].strMealThumb
        imageElement.alt = 'suggestion image'
        imageElement.classList.add('suggestion-image')

        const detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        const leftDiv = document.createElement('div')
        leftDiv.classList.add('left')

        const h3Element = document.createElement('h3')
        h3Element.textContent = meals[i].strMeal

        // const pElement = document.createElement('p')
        // pElement.textContent = meals[i].strArea

        leftDiv.appendChild(h3Element)
        // if (meals[i].strArea != 'Unknown') {
        //     leftDiv.appendChild(pElement)
        // }

        const rightDiv = document.createElement('div')
        rightDiv.classList.add('right')

        const heartImageElement = document.createElement('img');
        heartImageElement.classList.add('heart');
        heartImageElement.src = '../images/profile_image.jpg';
        heartImageElement.alt = 'heart image';

        rightDiv.appendChild(heartImageElement);

        detailsDiv.appendChild(leftDiv);
        // detailsDiv.appendChild(rightDiv);
        
        resultContainer.appendChild(imageElement)
        resultContainer.appendChild(detailsDiv)

        resultsContainer.appendChild(resultContainer)
    }
}

function showAllRecipes(results, meals) {
    const resultsContainer = document.getElementById('results-container')

    for (i = 3; i < results; i++) {
        const resultContainer = document.createElement('div')
        resultContainer.classList.add('result-container')
        resultContainer.id = `result-${i}`

        var recipeID = meals[i].idMeal
        resultContainer.setAttribute('onclick', `redirectToRecipePage(${recipeID})`)

        const imageElement = document.createElement('img')
        imageElement.src = meals[i].strMealThumb
        imageElement.alt = 'recipe image'
        imageElement.classList.add('recipe-image')

        const detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        const leftDiv = document.createElement('div')
        leftDiv.classList.add('left')

        const h3Element = document.createElement('h3')
        h3Element.textContent = meals[i].strMeal

        const pElement = document.createElement('p')
        pElement.textContent = meals[i].strArea

        leftDiv.appendChild(h3Element)
        if (meals[i].strArea != 'Unknown') {
            leftDiv.appendChild(pElement)
        }

        const rightDiv = document.createElement('div')
        rightDiv.classList.add('right')

        const heartImageElement = document.createElement('img');
        heartImageElement.classList.add('heart');
        heartImageElement.src = '../images/profile_image.jpg';
        heartImageElement.alt = 'heart image';

        rightDiv.appendChild(heartImageElement);

        detailsDiv.appendChild(leftDiv);
        // detailsDiv.appendChild(rightDiv);
        
        resultContainer.appendChild(imageElement)
        resultContainer.appendChild(detailsDiv)

        resultsContainer.appendChild(resultContainer)
    }
}
