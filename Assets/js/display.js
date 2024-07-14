function displayDishPairingForWine(searchTerm, winePairings) {
    

    // Remove the content for below elements when calling this function
    const searchResultsDiv = $('#search-results');
    searchResultsDiv.empty();

    const receipesDiv = $('#recipes');
    receipesDiv.empty();

    if (winePairings.status != 'failure') { 

        const article = $('<article>').addClass('message is-primary');

        const divMsgHeader = $('<div>').addClass('message-header');        
        // const term = $('<p>').addClass('is-uppercase has-text-centered').text(searchTerm);
        const desc = $('<p>').addClass('is-family-primary').text(winePairings.text);
        
        const divMsgBody = $('<div>').addClass('message-body');
        const rec = $('<p>').addClass('is-family-primary has-text-weight-semibold').text('Check our top rated recipes that are easy to make and sure to please:');

        const div = $('<div>').addClass('field is-grouped px-3');
        for (let i = 0; i < winePairings.pairings.length; i++) {
            let button = $('<button>').addClass('dish button is-primary is-dark').text(winePairings.pairings[i]);
          
            div.append(button); 
        }     

        divMsgHeader.append(desc);
        divMsgBody.append(rec, div);
        article.append(divMsgHeader, divMsgBody);
        $('#search-results').append(article);  
    }
    else {

        const msg = $('<p>').addClass('px-6 is-family-primary has-text-danger is-size-6').text(winePairings.message);

        $('#search-results').addClass('message is-success').append(msg);

    }    
}

function displayRecipes(recipes) {
    
    // Remove the content for below elements when calling this function
    const receipesDiv = $('#recipes');
    receipesDiv.empty();

    if (recipes.status != 'failure') {  
        for (let i = 0; i < recipes.results.length; i++) {
            const recipeID = recipes.results[i].id;            


            // creating a card
            const card = $('<div>').addClass('cell card has-text-centered');
            
            const divImage = $('<div>').addClass('card-image has-text-centered px-3');
            const img = $('<img>').attr({'src':`${recipes.results[i].image}`, 'alt':'recipe-image'}).addClass('py-3');
            
            const divContent = $('<div>').addClass('card-content');

            const title = $('<button>').attr({ 'id': recipeID }).addClass('recipe button is-ghost px-0 is-size-7').text(recipes.results[i].title);

            
            divImage.append(img);
            divContent.append(title);
            card.append(divImage, divContent);

            $('#recipes').append(card);            
        }      
    }
    else {
        const msg = $('<p>').addClass('px-6 is-family-primary has-text-danger is-size-6').text(recipes.message);
        $('#search-results').append(msg); 

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
            

        const pairingText = $('<p>').addClass('is-family-primary is-size-6 py-2 px-6 mb-0').text(pairedWines.pairingText);
        $('#search-results').append(pairingText);

        //product matches array        
        // for (let i = 0; i < pairedWines.productMatches.length; i++) {
            const link = pairedWines.productMatches[0].link;  
            console.log(link);
            
            // creating a card
            const card = $('<div>').addClass('cell card has-text-centered');
            
            const divImage = $('<div>').addClass('card-image has-text-centered px-3');
            const img = $('<img>').attr({'src':`${pairedWines.productMatches[0].imageUrl}`, 'alt':'wine-image'}).addClass('py-3');
            
            const divContent = $('<div>').addClass('card-content');
            const desc = $('<p>').addClass('is-family-primary is-size-6 py-2 px-6 mb-0').text(pairedWines.productMatches[0].description);

            
            const footerDiv = $('<footer>').addClass('card-footer justify-content-center');
            const title = $('<button>').attr({'src': link}).addClass('wine button is-ghost').text(pairedWines.productMatches[0].title);
            const price = $('<span>').addClass('py-2').text(pairedWines.productMatches[0].price);

            divImage.append(img);
            divContent.append(desc);
            footerDiv.append(title.slice(0,40), price);
            card.append(divImage, divContent, footerDiv);
            $('#wine-info').append(card);   
        // }            
    }
    else {
        const msg = $('<p>').addClass('px-6 is-family-primary has-text-danger is-size-6').text(pairedWines.message);
        $('#search-results').append(msg); 

    }    
}