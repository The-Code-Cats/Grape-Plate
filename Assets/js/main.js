const APIKey = 'a957835674014562ab42b1ac05dec254';

function searchWineHandler (event) {    
    event.preventDefault(); 
    const searchTerm = $('#searchWine').val().trim(); 

    if (searchTerm === "") {
        console.log('show error');        
        $('#errorWine').text('Please enter wine').css( 'color', 'red' );
    }
    else {        
        getDishPairingForWine(searchTerm);        
        
        $('#searchWine').val(''); // Clear search input        
        $('#errorWine').text(''); // Clear error message 
    }
}

function searchFoodHandler (event) {   
    event.preventDefault(); 
    const searchTerm = $('#searchFood').val().trim(); 

    if (searchTerm === "") {
        console.log('show error');
        $('#errorFood').text('Please enter food').css('color', 'red');
    }
    else {
        getWinePairing(searchTerm);
        
        $('#searchWine').val(''); // Clear search input        
        $('#errorWine').text(''); // Clear error message
    }
}

function searchRecipeHandler (event) {    
    event.preventDefault();
    const dish = event.target.innerText;
    searchRecipes(dish);
}

function searchRecipeInfoHandler (event) {
    event.preventDefault();
    const recipeID = event.target.id;
    getRecipeSourceURL(recipeID);
}

$(document).ready(function () {
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key
    $(document).on('click', '.dish', searchRecipeHandler);  // Click on a dish
    $(document).on('click', '.recipe', searchRecipeInfoHandler);  // Click on a recipe

});