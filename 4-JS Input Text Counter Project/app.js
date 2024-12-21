let proudctNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');
let maxAllowedChars = proudctNameInputElement.maxLength;

function updateRemainingCharacter(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;
  let remainingCharacter = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacter;
}

proudctNameInputElement.addEventListener('input', updateRemainingCharacter);
