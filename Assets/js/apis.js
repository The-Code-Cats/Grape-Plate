// Get dish pairing for a food
function getWinePairing(searchTerm) {
    const dishURL = `https://api.spoonacular.com/food/wine/pairing?apiKey=${APIKey}&food=${searchTerm}`;
    
    fetch(dishURL)
        .then((response) => {            
            if (!response.ok) {
                console.log('Response status:', response.status);
            }
            response.json().then((pairedWines) => {
                displayPairedWine(pairedWines);
                console.log('pairedWines:', pairedWines);
            })                    
        })
        .catch((error) => {
                console.log(error);
        });
}


// Get dish pairing for a wine
function getDishPairingForWine(searchTerm) {
    const wineURL = `https://api.spoonacular.com/food/wine/dishes?apiKey=${APIKey}&wine=${searchTerm}`;
    
    fetch(wineURL)
        .then((response) => {            
            if (!response.ok) {
                console.log('Response status:', response.status);
            }
            response.json().then((winePairings) => {
                displayDishPairingForWine(searchTerm, winePairings);
                console.log('winePairings:', winePairings);
            })                    
        })
        .catch((error) => {
                console.log(error);
        });
}

function searchRecipes(searchTerm) {

    const recipesURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&query=${searchTerm}&number=10`;                        

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

// Get recipe information by recipe id 
function getRecipeSourceURL(recipeID) {
    const infoURL = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${APIKey}`;
    
    fetch(infoURL)
        .then((response) => {            
            if (!response.ok) {
                console.log('Response status:', response.status);
            }
            response.json().then((info) => {
                const sourceURL = info.sourceUrl;
                displaySourceURL(sourceURL);
            })                    
        })
        .catch((error) => {
                console.log(error);
        });
}

