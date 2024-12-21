let paragraphElement = document.querySelector('p');

function changeParagraphText(){
  paragraphElement.textContent = 'Clicked!';
  console.log('Text Changed');
}

paragraphElement.addEventListener('click', changeParagraphText);

// ---------------------------------------------------

let inputElement = document.querySelector('input');

function extractUserInput(){
  let enterdText = inputElement.value;
  console.log(enterdText);
}

inputElement.addEventListener('input',extractUserInput);