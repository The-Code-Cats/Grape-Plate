const APIKey = 'a957835674014562ab42b1ac05dec254';

function searchWineHandler (event) {    
    event.preventDefault(); 
    const searchTerm = $('#searchWine').val().trim(); 

    if (searchTerm === "") {
        console.log('show error');        
        $('#errorWine').text('Please enter wine').addClass('is-size-5 has-text-danger');
        $('#errorFood').text(''); // Clear error message
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
        $('#errorFood').text('Please enter food').addClass('is-size-5 has-text-danger');               
        $('#errorWine').text(''); // Clear error message
       
    }
    else {
        getWinePairing(searchTerm);
        
        $('#searchFood').val(''); // Clear search input        
        $('#errorFood').text(''); // Clear error message
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

function wineHandler(event) {
    event.preventDefault();
    const link = event.target.getAttribute('src');
    displaySourceURL(link);
}

$(document).ready(function () {
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key
    $(document).on('click', '.dish', searchRecipeHandler);  // Click on a dish link
    $(document).on('click', '.recipe', searchRecipeInfoHandler);  // Click on a recipe link
    $(document).on('click', '.wine', wineHandler);  // Click on a wine link

});