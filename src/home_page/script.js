// Function to simplify 'return document.getElementById()'
function getID(str) {
    return document.getElementById(str)
}

// Search button function
function redirectToSearchPage() {
    // Get the value of the search input
    var searchQuery = getID('search-query').value
    // Redirect to the search page with the search query as a parameter
    location.href = '../search_page/search.html?' + searchQuery
}

// When search icon is clicked activate search function
var searchIcon = getID('search-icon')
searchIcon.onclick = function () {
    redirectToSearchPage()
}

// Activate search function when 'enter' key is pressed
var sq = document.getElementById('search-query')
sq.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        redirectToSearchPage()
    }
});

// Api call
async function fetchAPI() {
    const apiUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s`
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl)
        const data = await response.json()
        // Return the retrieved data
        return data
    } catch (error) {
        // Log an error if the fetch fails and return 0
        return 0
    }
}

// Fetch data from the API and handle the results
fetchAPI()
    .then(data => {
        // Extract information from the API response
        results = data.meals.length
        meals = data.meals
        // Display suggested recipes and all recipes
        showSuggestedRecipes(results, meals)
        showAllRecipes(results, meals)
    })

// Redirect to the recipe page with the provided recipe ID
function redirectToRecipePage(recipeID) {
    location.href = '../recipe_page/recipe.html?' + recipeID
}

// Display suggested recipes in the UI
function showSuggestedRecipes(results, meals) {

    const resultsContainer = document.getElementById('suggestion-cards-container')

    for (i = 0; i < 3; i++) {
        // Create a container for each suggested recipe
        const resultContainer = document.createElement('div')
        resultContainer.classList.add('suggestion-container')
        resultContainer.id = `suggestion-${i}`
        
        // Set up an onclick event to redirect to the recipe page when clicked
        var recipeID = meals[i].idMeal
        resultContainer.setAttribute('onclick', `redirectToRecipePage(${recipeID})`)

        // Create elements for the suggested recipe details
        // (image, name, and a heart icon)
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

        // Append the created elements to the results container
        resultsContainer.appendChild(resultContainer)
    }
}

// Display all recipes (excluding the suggested ones) in the UI
function showAllRecipes(results, meals) {
    const resultsContainer = document.getElementById('results-container')

    for (i = 3; i < results; i++) {
        // Create a container for each recipe
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

        // Append the created elements to the results container
        resultsContainer.appendChild(resultContainer)
    }
}
