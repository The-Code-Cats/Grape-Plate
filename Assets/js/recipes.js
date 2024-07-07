function searchRecipesByIngredients(searchTerm) {

    // User searchTerm to extract ingredients and pass to recipesURLe 
    const ingredients = searchTerm;
    console.log('ingredients', ingredients);  

    ingredients.forEach(function(ingredient, index) {
        ingredients[index] = '\'' + ingredient + '\'';
    });
    console.log('ingredients with quotes', ingredients);

    let queryParam = ingredients.join(",+");    
    console.log('ingredients', queryParam);
   
    // https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2

    const recipesURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${queryParam}&number=10`;
    console.log('recipesURL', recipesURL);
    fetch(recipesURL)
        .then((response) => {            
            if (!response.ok) {
                console.log('Response status:', response.status);
            }
            response.json().then((recipes) => {
                displayRecipes(recipes);
                // updateRecipesInLocalStorage(recipes);
                console.log('recipes:', recipes);
            })                    
        })
        .catch((error) => {
                console.log(error);
        });
}