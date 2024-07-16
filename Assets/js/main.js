function searchWineHandler (event) {    
    event.preventDefault(); 
    const searchTerm = $('#searchWine').val().trim(); 

    if (searchTerm === "") {
        console.log('show error');        
        $('#errorWine').text('Please enter wine').addClass('is-size-5 has-text-danger');
        $('#errorFood').text(''); // Clear error message
    }
    else {        
        const recipesDiv = $('recipes');
        recipesDiv.empty();
        const wineInfoDiv = $('#wine-info');
        wineInfoDiv.empty();
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
        const wineInfoDiv = $('#wine-info');
        wineInfoDiv.empty();
        const recipesDiv = $('recipes');
        recipesDiv.empty();
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

function burgerHandler(event) {
    $('#nav-links').toggleClass('is-active');
}

function modalHandler(event) {
    event.preventDefault(); 
    // Clear error message
    $('#errorSignUp').text(''); 
    $('.modal').addClass('is-active');
}

function modalCloseHandler(event) {
    event.preventDefault(); 
    // Clear error message
    $('#errorSignUp').text(''); 
    $('.modal').removeClass('is-active');
}

function signupHandler(event) {
    event.preventDefault();
    let userName = $('#user-name').val();
    let userEmail = $('#user-email').val();
    if (userName === "" || userEmail === "") {
        console.log('show error');        
        $('#errorSignUp').text('Please enter user name and/or email to sign up').css( 'color', 'red' );
    } else {
        $('#show-username').removeClass('is-hidden').addClass('is-visible').text(` ${userName}`);
        // console.log(userName, userEmail);
        const user = {
            name: userName,
            email: userEmail
        };

        localStorage.setItem('user', JSON.stringify(user));
        $('.modal').removeClass('is-active'); // close modal
        $('#signup').addClass('is-hidden'); // hide Sign Up button
        $('#logout').removeClass('is-hidden').addClass('is-visible'); // show Logout button
    }    
}

function logoutHandler(event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        $('#show-username').removeClass('is-visible').addClass('is-hidden');
        localStorage.removeItem('user');
        $('#logout').removeClass('is-visible').addClass('is-hidden'); // hide Logout button
        $('#signup').removeClass('is-hidden').addClass('is-visible'); // show SignUp button
    }
}

function renderPageOnLoad() {
    // Retrieve user from the localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {        
        let userName = user.name;
        $('#show-username').removeClass('is-hidden').addClass('is-visible').text(` ${userName}`);
        $('#logout').removeClass('is-hidden').addClass('is-visible'); 
        $('#signup').removeClass('is-visible').addClass('is-hidden'); 
    
    } else {
        $('#show-username').removeClass('is-visible').addClass('is-hidden');
        $('#signup').removeClass('is-hidden').addClass('is-visible');
        $('#logout').removeClass('is-visible').addClass('is-hidden');     
    }
}

$(document).ready(function () {

    renderPageOnLoad();
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key
    $(document).on('click', '.dish', searchRecipeHandler);  // Click on a dish link
    $(document).on('click', '.recipe', searchRecipeInfoHandler);  // Click on a recipe link
    $(document).on('click', '.wine', wineHandler);  // Click on a wine link
    
    // Mobile menu
    $('#burger').on('click', burgerHandler); 
    $('.bounce_in_animation').textAnimation(250, 75, 'slideDown');

    // Modal
    $('#signup').on('click', modalHandler);    
    $('.delete').on('click', modalCloseHandler);
    $('.modal-background').on('click', modalCloseHandler);
    $('#modal-signup').on('click', signupHandler);
    $('#logout').on('click', logoutHandler);
});

  (function( $ ){ // the link to this animation is found here https://codepen.io/worksbyvan/pen/QqNGbZ

    $.fn.textAnimation = function( animation_speed, text_speed, animation ){
      var text, i = 0;
      

      var $this = $(this);
      // store text and clear
      text = $this.text();
      $this.css('white-space', 'pre');
      $this.html('');
      
      var addLetter = setInterval(function(){
        $this.append('<div class="text_animation" style="display: inline-block; animation: ' + animation + ' ' + animation_speed + 'ms forwards">' + text[i] + '</div>');
        i++;
        if (i == text.length) clearInterval(addLetter);
      }, text_speed);
    }
  })( jQuery )




