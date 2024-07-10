# Grape-Plate
Food and Wine Pairing Application
Overview

Files
index.html: Contains the structure and layout of the application, including modals and form inputs.
style.css: Custom CSS styles for the application.
main.js: JavaScript file containing logic for API interactions and event handling.

Changes Made
index.html
Modal Structure: Adjusted modal structure to ensure compatibility with jQuery.
Button Event Handling: Updated button event handlers to use jQuery selectors and methods.

main.js
Event Binding: Replaced vanilla JavaScript event listeners with jQuery event handlers (click, keypress).
Modal Functionality: Ensured consistent behavior for modal opening (addClass('is-active')) and closing (removeClass('is-active')).
Form Submission Handling: Used jQuery to handle form submission ($('#modalSubmitButton').click()) and keypress event to detect 'Enter' key for form submission.

jQuery Usage
Advantages: jQuery simplifies DOM manipulation and event handling, making the code more concise and readable.
Consistency: Ensured all modal interactions (open, close, submit) are managed through jQuery for uniformity and ease of maintenance.

Usage
Opening Modal: Click on "Open Modal" button (#openModalButton) to display the modal.
Closing Modal: Click on the close button (#close-signup-modal), modal background, or "Cancel" button (#closeButton) to hide the modal.
Submitting Form: Enter a username and email in the modal form, then click "Submit" (#modalSubmitButton). The modal will close upon successful submission.

Troubleshooting
Ensure jQuery library (jquery-3.5.1.min.js) is included and loaded before your custom JavaScript (main.js).
Check console for any JavaScript errors that may affect modal functionality.

