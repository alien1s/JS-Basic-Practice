const productNameInputElement = document.getElementById('product-name');
const inputCharsElement = document.getElementById('remaining-chars');
const maxAllowedCars = productNameInputElement.maxLength;

function changeInputRimaningChars (event) {
    const inputContent = event.target.value;
    const inputTextLength = inputContent.length;
    const remainangChars = maxAllowedCars - inputTextLength;
    inputCharsElement.textContent = remainangChars;
};

productNameInputElement.addEventListener('input',changeInputRimaningChars)