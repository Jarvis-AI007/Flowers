// Function to display the "Good Morning" text
function displayGoodMorning() {
  alert("Good Morning DNC !! 😉 ... wanna see some flowers for uhh ?? 💕 ");
}

// Wait for the DOM content to be loaded
window.onload = () => {
  // Display the "Good Morning" text
  displayGoodMorning();

  // Remove the "not-loaded" class after 1000 milliseconds
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
};
