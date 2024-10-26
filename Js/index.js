// Declare an array of strings to be typed
var texts = ["STUDENT", "SOFTWARE DEVELOPER", "PROGRAMMER"];
// Set the index of the current string to be typed
var index = 0;
// Set a boolean to determine if the text is being deleted
var isDeleting = false;

// Function to type the text
function typeText() {
  // Get the current string to be typed
  var currentText = texts[index];
  // If the text is being deleted, remove the last character
  if (isDeleting) {
    document.getElementById("typing-text").textContent = currentText.substring(
      0,
      document.getElementById("typing-text").textContent.length - 1
    );
    // If the text is not being deleted, add the next character
  } else {
    document.getElementById("typing-text").textContent = currentText.substring(
      0,
      document.getElementById("typing-text").textContent.length + 1
    );
  }

  // var delta = 300 - Math.random() * 100; // Random delay for typing speed variation
  var delta = 50;

  // If the text has been typed and is not being deleted, delay for 1.5 seconds
  if (
    !isDeleting &&
    document.getElementById("typing-text").textContent === currentText
  ) {
    delta = 1500; // Delay after typing
    isDeleting = true;
    // If the text has been deleted and is not being typed, move to the next string
  } else if (
    isDeleting &&
    document.getElementById("typing-text").textContent === ""
  ) {
    isDeleting = false;
    index++;
    if (index >= texts.length) {
      index = 0;
    }
    delta = 300;
  }

  // Call the function again after the delay
  setTimeout(typeText, delta);
}

// Call the function to start typing
typeText();
