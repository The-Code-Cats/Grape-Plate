const APIKey = 'a957835674014562ab42b1ac05dec254';
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

function getRecipesHandler (event) {
   
    event.preventDefault();
    searchRecipesByIngredients(dishes);
}


function displayDishPairingForWine(winePairings) {

    // Remove the content for below elements when calling this function
    const searchResultsDiv = $('#search-results');
    searchResultsDiv.empty();

    const receipesDiv = $('#recipes');
    receipesDiv.empty();

    dishes = winePairings.pairings;        
    if (winePairings) {        
            
        const text = $('<p>').addClass('p-2 mb-0 fw-bold').text(winePairings.text);
        const question = $('<p>').addClass('float-start p-2 mb-0 fw-bold').text('Looking for a variety of delicious food recipes that are easy to make and sure to please?');
        const recipes = $('<button>').attr({'id':'get-recipies'}).addClass('float-start btn btn-link').text('Get the recipies here');
        const div = $('<div>').addClass('d-inline');
        div.append(question, recipes);
        $('#search-results').append(text, div);       
      
    }
    else {
        console.log('Wine not recognized');
    }
    
}

function displayRecipes(recipes) {
    
    // Remove the content for below elements when calling this function
    const searchResultsDiv = $('#search-results');
    searchResultsDiv.empty();

    const receipesDiv = $('#recipes');
    receipesDiv.empty();
        
    if (recipes) {   
        for (let i = 0; i < recipes.length; i++) {
            const title = $('<p>').addClass('p-2 mb-0 fw-bold').text(recipes[i].title);
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
        
    if (pairedWines) {        
            
        const pairingText = $('<p>').addClass('p-2 mb-0 fw-bold').text(pairedWines.pairingText);
        $('#search-results').append(pairingText);
      
    }
    else {
        console.log('Could not find a wine pairing for meet');
    }    
}

$(document).ready(function () {
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key

    // Call event handler function when clicking on Get recipies
    $(document).on('click', '#get-recipies', getRecipesHandler);     
});