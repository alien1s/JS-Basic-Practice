
// -----------------------JavaScript CalculatorSumButton-------------------

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum(event) {
  const userInputNumberElement = document.getElementById("user-number");
  const enterdNumber = userInputNumberElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enterdNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);


// -----------------------------------------------------------------------




