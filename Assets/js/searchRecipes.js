function searchRecipesByIngredients(searchTerm) {

    // Use searchTerm to extract ingredients and pass to recipesURL 
    const ingredients = searchTerm;
    // console.log('ingredients', ingredients);  

    ingredients.forEach(function(ingredient, index) {
        ingredients[index] = '\'' + ingredient + '\''; 
    });   

    let queryParam = ingredients.join(",+");    
    console.log('queryParam', queryParam);
   
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
                console.log('recipes:', recipes);
            })                    
        })
        .catch((error) => {
                console.log(error);
        });
}