function getID(str) {
    return document.getElementById(str)
}

var recipeID = (window.location.search).replace('?', '')

// api call
async function fetchAPI() {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    } catch (error) {
        return 0
    }
}

fetchAPI()
    .then(data => {
        updateElements(data.meals[0])
        // console.log(data.meals[0])
    })

function redirectToSource(source) {
    window.location.href = source
}

function updateElements(data) {
    recipeImage = getID('recipeImage')
    recipeImage.src = data.strMealThumb

    recipeName = getID('name')
    recipeName.innerHTML = data.strMeal

    recipeArea = getID('area')
    recipeArea.innerHTML = data.strArea

    recipeInstructions = getID('instructionsPara')
    recipeInstructions.innerHTML = data.strInstructions

    ing1 = getID('ing1')
    ing1.innerHTML = data.strIngredient1

    ing2 = getID('ing2')
    ing2.innerHTML = data.strIngredient2

    ing3 = getID('ing3')
    ing3.innerHTML = data.strIngredient3

    ing4 = getID('ing4')
    ing4.innerHTML = data.strIngredient4

    ing5 = getID('ing5')
    ing5.innerHTML = data.strIngredient5

    ing6 = getID('ing6')
    ing6.innerHTML = data.strIngredient6

    viewFullRecipe = getID('viewFullRecipeButton')
    viewFullRecipe.onclick = function () {
        if (data.strSource) {
            redirectToSource(data.strSource)
        } else {
            redirectToSource(data.strYoutube)
        }
    }
}
    