var title = document.getElementsByClassName("accordion-title");
var index;
for (index = 0; index < title.length; index++) {
title[index].addEventListener("click", function() {
    this.classList.toggle("active");
    var currentElement = this.nextElementSibling;
    if (currentElement.style.display === "block") {
    currentElement.style.display = "none";
    } else {
    currentElement.style.display = "block";
    }
});
}


// Function to change the images when the "Change Images" button is clicked
function changeImages() {
    const imageContainer = document.getElementById("image-container");
    const images = imageContainer.getElementsByTagName("img");
  
    // Loop through the images and change their source
    for (let i = 0; i < images.length; i++) {
      const randomNumber = Math.floor(Math.random() * 1000);
      const newSource = `https://picsum.photos/300/200?random=${randomNumber}`;
      images[i].src = newSource;
    }
  }
  
  // Function to change the text when the "Change Text" button is clicked
  function changeText() {
    const textContainer = document.getElementById("text-container");
    const text = textContainer.getElementsByTagName("p")[0];
  
    // Change the text to a new value
    text.innerText = "This text was changed with JavaScript!";
  }
  
  // Function to check the input value and display an error if it is not correct
  function checkValue() {
    const inputField = document.getElementById("input-field");
    const value = inputField.value;
  
    // Check if the value is equal to "OpenAI"
    if (value === "Hello") {
      alert("Correct value entered!");
    } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerText = "Incorrect value entered.";
    }
  }
 
//  // Get all accordion buttons
// var accordionBtns = document.querySelectorAll(".accordion-btn");

// // Loop through the accordion buttons and add click event listener to each
// accordionBtns.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     // Toggle the active class on the clicked button
//     this.classList.toggle("active");
    
//     // Get the panel associated with the clicked button
//     var panel = this.nextElementSibling;
    
//     // Toggle the panel's display property
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// });
function toggleAccordion() {
    var accordionContent = document.getElementById("accordion-content");
    if (accordionContent.style.display === "none") {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  }
  


  