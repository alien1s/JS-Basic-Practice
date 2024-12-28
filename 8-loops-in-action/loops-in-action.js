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

// ---------------------------------Statistics Roll the Dice------------------------------------------

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.65=>5
}

function driveNumberOfDiceRoll(event) {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollLIstElement = document.getElementById("dice-rolls");

  const enterdNumber = targetNumberInputElement.value; // this is return string if we wanna to handeld as anumber we write it in this way "+targetNumberInputElement.value"

  diceRollLIstElement.innerHTML = "";

  let hasRollTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRollTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enterdNumber) {
    //     hasRollTargetNumber = true;
    // }

    numberOfRolls++;
    const newRollItemListElement = document.createElement("li");
    const outputText = "Roll" + numberOfRolls + ":" + rolledNumber;
    newRollItemListElement.textContent = outputText;
    diceRollLIstElement.append(newRollItemListElement);
    hasRollTargetNumber = rolledNumber == enterdNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTotalRollsElement.textContent = numberOfRolls;
  outputTargetNumberElement.textContent = enterdNumber;
}

rollDiceButtonElement.addEventListener("click", driveNumberOfDiceRoll);
