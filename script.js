// Get the input field where the calculation results will be displayed
const inputField = document.querySelector(".input");

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonText = event.target.innerText;

  if (buttonText === "C") {
    // Clear the input field if "C" is clicked
    inputField.value = "";
  } else if (buttonText === "=") {
    // Evaluate the expression and show the result when "=" is clicked
    try {
      const result = eval(inputField.value);
      inputField.value = result;
    } catch (error) {
      inputField.value = "Error";
    }
  } else {
    // Append the button's value to the input field
    inputField.value += buttonText;
  }
}

// Get all the buttons
const buttons = document.querySelectorAll(".button, .button-clear, .button-equal");

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
