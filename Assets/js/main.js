const APIKey = 'a957835674014562ab42b1ac05dec254';

let logoutFlag = false;
let currentUser = JSON.parse(localStorage.getItem('currentUser'));


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

function clearLocalStorage(){
    currentUser = null;
    localStorage.setItem('currentUser',JSON.stringify(currentUser));

    $('#LogoutButton').removeClass('is-visible').addClass('is-hidden');
    $('#openModalButton').removeClass('is-hidden').addClass('is-visible');
    $('#userNameElement').html("");
    logoutFlag = true;
    $('#guestDisplayName').text("Welcome Guest");
}

$(document).ready(function () {
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key
    $(document).on('click', '.dish', searchRecipeHandler);  // Click on a dish link
    $(document).on('click', '.recipe', searchRecipeInfoHandler);  // Click on a recipe link
    $(document).on('click', '.wine', wineHandler);  // Click on a wine link
    
    //   Mobile menu
    $('#burger').on('click', burgerHandler); 
    $('#LogoutButton').on('click', clearLocalStorage);
    $('.bounce_in_animation').textAnimation(250, 75, 'slideDown');

    

});

$('#modalSubmitButton').on('click', handleModalSubmit);  // Enter key
let usernameInputEl = $('#userName');
let emailInputEl = $('#emailInput');




function handleModalSubmit(){
    // console.log("here");
    // console.log(emailInputEl.val());
    // console.log(usernameInputEl.val());
    // console.log( typeof(usernameInputEl.val()));
    if (usernameInputEl.val() !== "" && emailInputEl.val() !== ""){ // THIS ISN'T WORKING
        // create a user object
        const userObject = {
            userName : usernameInputEl.val(),
            email : emailInputEl.val()
        };
        usernameInputEl.val("");
        emailInputEl.val("");
        // console.log(userObject);
        currentUser = JSON.stringify(userObject);
        localStorage.setItem('currentUser', currentUser);
        document.getElementById("myModal").classList.remove("is-active");
        $('#userNameElement').html("Username:  " + userObject.userName + "" + "<br>Email: " +  userObject.email + "");
        $('#openModalButton').removeClass('is-visible').addClass('is-hidden');
        $('#LogoutButton').removeClass('is-hidden').addClass('is-visible');
        $('#guestDisplayName').text("Welcome " + userObject.userName);
        // closeModal();

        // save to local storage
        // refresh page
    }
else{
        alert('Invaild username or email. Please try again.');



    }

}

function closeModal() {
    // console.log("is this working?");
    document.getElementById("myModal").classList.remove("is-active");
  }


function handleLocalStoragePageRender(){
    // console.log(localStorageContainsUser());
    if(localStorageContainsUser()){
        renderUserNameOnLoad();
    }
    
}

function localStorageContainsUser(){
    return currentUser != null;
}

function renderUserNameOnLoad(){
    // console.log(currentUser);
    $('#userNameElement').html("Username:  " + currentUser.userName + "" + "<br>Email: " +  currentUser.email + "");
    $('#openModalButton').removeClass('is-visible').addClass('is-hidden');
    $('#LogoutButton').removeClass('is-hidden').addClass('is-visible');
    $('#guestDisplayName').text("Welcome " + currentUser.userName);

}




document.addEventListener('DOMContentLoaded', function () {
    // Get modal and open button elements
    var modal = document.getElementById('myModal');
    var openModalButton = document.getElementById('openModalButton');

    handleLocalStoragePageRender();

    // Add click event listener to open button
    openModalButton.addEventListener('click', function () {
      modal.classList.add('is-active'); // Add 'is-active' class to show modal
    });

    // Add click event listener to close modal when clicking outside modal or on close button
    modal.addEventListener('click', function (event) {
      if (event.target === modal || event.target.classList.contains('delete')) {
        modal.classList.remove('is-active'); // Remove 'is-active' class to hide modal
      }
    });


    setTimeout(handleModalOpenOnRefresh, 4000);


  });


  function handleModalOpenOnRefresh(){
    console.log(localStorageContainsUser());
    if(localStorageContainsUser() == false && logoutFlag == false){
        var modal = document.getElementById('myModal');
        modal.classList.add('is-active');
    }
  }

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




