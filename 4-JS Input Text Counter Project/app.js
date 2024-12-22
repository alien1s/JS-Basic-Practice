const proudctNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowedChars = proudctNameInputElement.maxLength;

function updateRemainingCharacter(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharacter = maxAllowedChars - enteredTextLength;
  
  remainingCharsElement.textContent = remainingCharacter;
  
  if (remainingCharacter === 0) {
    proudctNameInputElement.classList.add("error");
    remainingCharsElement.classList.add("error");
  }else if (remainingCharacter <= 10) {
    proudctNameInputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
    proudctNameInputElement.classList.remove("error");
    remainingCharsElement.classList.remove("error");  
  } else {
    proudctNameInputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
  }
}

proudctNameInputElement.addEventListener("input", updateRemainingCharacter);
