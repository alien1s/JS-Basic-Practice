const proudctNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowedChars = proudctNameInputElement.maxLength;

function updateRemainingCharacter(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharacter = maxAllowedChars - enteredTextLength;
  remainingCharsElement.textContent = remainingCharacter;
  if (remainingCharacter <= 10) {
    proudctNameInputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
  }
}

proudctNameInputElement.addEventListener("input", updateRemainingCharacter);
