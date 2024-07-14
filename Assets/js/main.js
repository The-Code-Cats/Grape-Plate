const APIKey = 'a957835674014562ab42b1ac05dec254';

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

$(document).ready(function () {
    
    // Call event handler functions when search input is submitted
    $('#search-wine').on('submit', searchWineHandler);  // Enter key
    $('#search-food').on('submit', searchFoodHandler);  // Enter key
    $(document).on('click', '.dish', searchRecipeHandler);  // Click on a dish link
    $(document).on('click', '.recipe', searchRecipeInfoHandler);  // Click on a recipe link
    $(document).on('click', '.wine', wineHandler);  // Click on a wine link
    
    //   Mobile menu
    $('#burger').on('click', burgerHandler); 
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

        // console.log(userObject);

        localStorage.setItem('currentUser',JSON.stringify(userObject));
        document.getElementById("myModal").classList.remove("is-active");
        $('#userNameElement').html(userObject.userName);
        // closeModal();

        // save to local storage
        // refresh page
    }
else{
        alert('Invaild username or email. Please try again.');



    }

}

function closeModal() {
    console.log("is this working?");
    document.getElementById("myModal").classList.remove("is-active");
  }




document.addEventListener('DOMContentLoaded', function () {
    // Get modal and open button elements
    var modal = document.getElementById('myModal');
    var openModalButton = document.getElementById('openModalButton');

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
  });