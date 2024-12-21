let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  // paragraphElement.textContent = 'Clicked!';
  event.target.textContent = "Clicked!";
  console.log("Text Changed");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

// ---------------------------------------------------

let inputElement = document.querySelector("input");

function extractUserInput(event) {
  // let enterdText = inputElement.value;
  // let enterdText = event.target.value;
  let enterdText = event.data;
  console.log(enterdText);
  console.log(event);
}

inputElement.addEventListener("input", extractUserInput);
