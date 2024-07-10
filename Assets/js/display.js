function displayDishPairingForWine(winePairings) {

    // Remove the content for below elements when calling this function
    const searchResultsDiv = $('#search-results');
    searchResultsDiv.empty();

    const receipesDiv = $('#recipes');
    receipesDiv.empty();

    if (winePairings.status != 'failure') { 
        
        const desc = $('<p>').addClass('p-2 mb-0 fw-bold').text(winePairings.text);
        const rec = $('<p>').addClass('p-2 mb-0 fw-bold').css('color', 'green' ).text('Click the link below to access top rated recipes that are easy to make and sure to please:');
        
        const div = $('<div>');
        for (let i = 0; i < winePairings.pairings.length; i++) {
            let button = $('<button>').addClass('dish button is-ghost').text(winePairings.pairings[i]);
            div.append(button); 
        }        
        $('#search-results').append(desc, rec, div);  
    }
    else {
        const msg = $('<p>').addClass('p-2 mb-0').css('color', 'red').text(winePairings.message);
        $('#search-results').append(msg); 
        console.log('Wine not recognized');
    }    
}

function displayRecipes(recipes) {
    
    // Remove the content for below elements when calling this function
    const receipesDiv = $('#recipes');
    receipesDiv.empty();

    if (recipes.status != 'failure') {  
        for (let i = 0; i < recipes.results.length; i++) {
            const recipeID = recipes.results[i].id;            

            // card
            const card = $('<div>').addClass('card');
            
            const divImage = $('<div>').addClass('card-image has-text-centered px-3');
            const img = $('<img>').attr({'src':`${recipes.results[i].image}`, 'alt':'recipe-image'});
            
            const divContent = $('<div>').addClass('card-content');
            const title = $('<button>').attr({ 'id': recipeID }).addClass('title is-size-5 recipe button is-ghost').text(recipes.results[i].title);
            
            divImage.append(img);
            divContent.append(title);
            card.append(divImage, divContent);
            $('#recipes').append(card);
            // const figure = $('<figure>').addClass('image is-200x200');
            
        }      
    }
    else {
        const msg = $('<p>').addClass('p-2 mb-0').css('color', 'red').text(recipes.message);
        $('#search-results').append(msg); 
        console.log('Could not find a recipe');
    }    
}

function displaySourceURL(sourceURL) {    
    location.assign(sourceURL);
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

        //product matches array        
        for (let i = 0; i < pairedWines.productMatches.length; i++) {
            const link = pairedWines.productMatches[i].link;  
            console.log(link);
            const title = $('<button>').attr({'src': link}).addClass('wine button is-ghost').text(pairedWines.productMatches[i].title);
            const price = $('<span>').addClass('p-2 mb-0 fw-bold').text(pairedWines.productMatches[i].price);
            const div = $('<div>');
            div.append(title, price);

            const desc = $('<p>').addClass('p-2 mb-0 fw-bold').text(pairedWines.productMatches[i].description);

            const img = $('<img>').attr({'src':`${pairedWines.productMatches[i].imageUrl}`, 'alt':'wine-image'});
            const divImg = $('<div>');
            divImg.append(img);
            const divWine = $('<div>').addClass('float-start p-2');
            divWine.append(div, desc, divImg);
            $('#recipes').append(divWine);           
        }      
        
      
    }
    else {
        const msg = $('<p>').addClass('p-2 mb-0').css('color', 'red').text(pairedWines.message);
        $('#search-results').append(msg); 
        console.log('Could not find a wine pairing for meet');
    }    
}