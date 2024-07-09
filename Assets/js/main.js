const APIKey = '8af27eda82f94fbaab427393bacc26d8';
let dishes = []; // used to build query params for the Recipes API

function searchWineHandler (event) {
    
    event.preventDefault(); 

    // Variable to hold search input
    const searchTerm = $('#searchWine').val().trim(); 

    if (searchTerm === "") {
        console.log('show error');        
        $('#errorWine').text('Please enter wine').css( 'color', 'red' );
    }
    else {        
        getDishPairingForWine(searchTerm);
        
        // Clear search input
        $('#searchWine').val('');             
        // Clear error message
        $('#errorWine').text(''); 
    }
}

function searchFoodHandler (event) {
   
    event.preventDefault(); 

    // Variable to hold search input
    const searchTerm = $('#searchFood').val().trim(); 

    if (searchTerm === "") {
        console.log('show error');
        $('#errorFood').text('Please enter food').css('color', 'red');
    }
    else {
        getWinePairing(searchTerm);
        
        // Clear search input
        $('#searchFood').val('');
        // Clear error message
        $('#errorFood').text('');
    }
}

function searchRecipeHandler (event) {
    
    event.preventDefault(); 

    const recipeID = event.target.id; // used to get recipeInfo by ID
    getRecipeInfo(recipeID);
}

function displayRecipeSource(sourceURL) {
    // location.replace(redirectUrl);
}

function displayDishPairingForWine(winePairings) {

    // Remove the content for below elements when calling this function
    const searchResultsDiv = $('#search-results');
    searchResultsDiv.empty();

    const receipesDiv = $('#recipes');
    receipesDiv.empty();

    dishes = winePairings.pairings;    
    

    if (winePairings.status != 'failure') { 
        
        const desc = $('<p>').addClass('p-2 mb-0 fw-bold').text(winePairings.text);
        $('#search-results').append(desc);   
        
        searchRecipesByIngredients(dishes);
    }
    else {
        const msg = $('<p>').addClass('p-2 mb-0').css('color', 'red').text(winePairings.message);
        $('#search-results').append(msg); 
        console.log('Wine not recognized');
    }
    
}

function displayRecipes(recipes) {
            
    if (recipes) {  
        const question = $('<p>').addClass('float-start p-2 mb-0 fw-bold').css('color', 'green' ).text('Our top 10 rated recipes that are easy to make and sure to please:');
        $('#search-results').append(question);

        for (let i = 0; i < recipes.length; i++) {
            const recipeID = recipes[i].id;
            getRecipeInfo(recipeID);
            
            // console.log('sourceURL 2',sourceURL);
            // const title = $('<button>').attr({'id':recipeID}, {'src': sourceURL}).addClass('recipe btn btn-link').text(recipes[i].title);
            const title = $('<button>').attr({'id':recipeID}).addClass('recipe btn btn-link').text(recipes[i].title);
            const img = $('<img>').attr({'src':`${recipes[i].image}`, 'alt':'recipe-image'});
            const divImg = $('<div>');
            divImg.append(img);
            const divReceipe = $('<div>').addClass('float-start p-2');
            divReceipe.append(title, divImg);
            $('#recipes').append(divReceipe);           
        }      
    }
    else {
        console.log('Wine not recognized');
    }
    
}

function displayPairedWine(pairedWines) {

    // Remove the content for below elements when calling this function
    const searchResultsDiv = $('#search-results');
    searchResultsDiv.empty();

    const receipesDiv = $('#recipes');
    receipesDiv.empty();
        
    if (pairedWines.status != 'failure') {        
            
        const pairingText = $('<p>').addClass('p-2 mb-0 fw-bold').text(pairedWines.pairingText);
        $('#search-results').append(pairingText);
      
    }
    else {
        const msg = $('<p>').addClass('p-2 mb-0').css('color', 'red').text(pairedWines.message);
        $('#search-results').append(msg); 
        console.log('Could not find a wine pairing for meet');
    }    
}

$(document).ready(function () {
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key
    $(document).on('click', '.recipe', searchRecipeHandler);  // Click on recipe

});