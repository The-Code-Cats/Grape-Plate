const APIKey = 'a957835674014562ab42b1ac05dec254'; // api.spoonacular.com

// Get wine pairing for a dish
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

// Get dish pairing for a wine
function searchRecipes(searchTerm) {
    const recipesURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&query=${searchTerm}&number=10`;                        

    console.log('recipesURL', recipesURL);
    fetch(recipesURL)
        .then((response) => {            
            if (!response.ok) {
                console.log('Response status:', response.status);
            }
            response.json().then((recipes) => {
                displayRecipes(recipes, searchTerm);
                console.log('recipes:', recipes);
            })                    
        })
        .catch((error) => {
                console.log(error);
        });
}

// Get recipe source URL by recipe id 
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

// Check if image exists
function checkImageURL(imgURL) {
    fetch(imgURL)
        .then((response) => {            
            if (!response.ok) {
                // console.log('Response status:', response.status);
                return false;
            } else {               
                // console.log('Response status:', response.status);
                return true;
            }                 
        })
        .catch((error) => {
                // console.log(error);
        });
}