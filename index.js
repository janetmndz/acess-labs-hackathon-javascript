document.addEventListener('DOMContentLoaded', () => {
    const APIURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const recipeContainer = document.querySelector('.recipe__container')
    const generateRecipe = document.querySelector('#generate-recipe')

    generateRecipe.addEventListener('click', () => {
        fetch(APIURL).then(resp => resp.json()).then(meals => addMealstoDOM(meals.meals[0]))
    })

    addMealstoDOM = (meal) => {
        console.log(meal)
        recipeContainer.innerHTML = `
            <div class="recipe_card__container">
                <div class="recipe_card___image">
                    <img src=${meal.strMealThumb} alt=${meal.strMeal}/>
                </div>
                <h2 class="recipe_card__title">${meal.strMeal}</h2>
                <div class="recipe_card__details">
                    <ul class= "recipe_card__ingredients">
                        <h3 class="details__heading">Ingredients</h3>
                        <li>${meal.strIngredient1} - ${meal.strMeasure1}</li>
                    </ul>
                    <div class="recipe_card__directions">
                        <h3 class="details__heading">Directions</h3>
                        <p>${meal.strInstructions}</p>
                    </div>
                </div>
            </div>`
    }

})