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

// --------------------------------Highlight Links---------------------------------------

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks(event) {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// ------------------------------Display User Data----------------------------------------

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

const userData = {
  Name: "Saif Eldin",
  nickName: "Alien",
  age: 27,
  specialty: "Physist&Developer",
  Degree: "BCs",
};

function displayUserData(event) {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const userDataProperty in userData) {
    const newUserDataListElement = document.createElement("li");
    const outputText =
      userDataProperty.toUpperCase() + ":" + userData[userDataProperty];
    newUserDataListElement.textContent = outputText;
    outputDataElement.append(newUserDataListElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);


// ---------------------------------------------------------------------------
