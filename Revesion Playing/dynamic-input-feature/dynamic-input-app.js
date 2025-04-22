const productNameInputElement = document.getElementById('product-name');
const inputCharsElement = document.getElementById('remaining-chars');
const maxAllowedCars = productNameInputElement.maxLength;

function changeInputRimaningChars (event) {
    const inputContent = event.target.value;
    const inputTextLength = inputContent.length;
    const remainangChars = maxAllowedCars - inputTextLength;

    inputCharsElement.textContent = remainangChars;

    if (remainangChars === 0) {
        inputCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if (remainangChars<= 10) {
        inputCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
        inputCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
    } else {
        inputCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }

};

productNameInputElement.addEventListener('input',changeInputRimaningChars)