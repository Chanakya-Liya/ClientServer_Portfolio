var texts = ["STUDENT", "SOFTWARE DEVELOPER", "PROGRAMMER"];
var index = 0;
var isDeleting = false;

function typeText() {
  var currentText = texts[index];
  if (isDeleting) {
    document.getElementById("typing-text").textContent = currentText.substring(
      0,
      document.getElementById("typing-text").textContent.length - 1
    );
  } else {
    document.getElementById("typing-text").textContent = currentText.substring(
      0,
      document.getElementById("typing-text").textContent.length + 1
    );
  }

  // var delta = 300 - Math.random() * 100; // Random delay for typing speed variation
  var delta = 50;

  if (
    !isDeleting &&
    document.getElementById("typing-text").textContent === currentText
  ) {
    delta = 1500; // Delay after typing
    isDeleting = true;
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

  setTimeout(typeText, delta);
}

typeText();
