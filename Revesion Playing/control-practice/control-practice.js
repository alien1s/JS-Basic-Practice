const buttonCalculatorElement = document.querySelector('#calculator button');

    function sumCalculator (event) {
        const inputCalculatorElement = document.getElementById('user-number');
        const randomNumberValue = inputCalculatorElement.value;
        let sumNumber = 0;
        for (let i=0; i<=randomNumberValue; i++) {
            sumNumber = sumNumber +i;
        };
        const outputParagraphCalculatorElement = document.getElementById('calculated-sum');
        outputParagraphCalculatorElement.textContent = sumNumber;
        outputParagraphCalculatorElement.style.display = 'block';
    };

buttonCalculatorElement.addEventListener('click', sumCalculator);




const buttonHighlightElement = document.querySelector('#highlight-links button');

    function highlightLinks (event) {
        const anchorElemmentArray = document.querySelectorAll('#highlight-links a');

        for (const anchorElemment of anchorElemmentArray) {
            anchorElemment.classList.add('highlight');
        };
    };

buttonHighlightElement.addEventListener('click', highlightLinks);




const buttonDisplayUserDataElement = document.querySelector('#user-data button');

    const userDumyData = {
        Name: 'User',
        Age: 27,
        isAdmin: true,
        Position: 'CEO',
        Salary: 5000+'$',
        Adress: 'Cairo'
    };

    function displayUserData (event) {
        const dataListElement = document.getElementById('output-user-data');
        dataListElement.innerHTML = '';
        for (const singleUserDate in userDumyData) {
            const singleOfDataListElement = document.createElement('li');
            const outputText = singleUserDate.toUpperCase() +':'+ userDumyData[singleUserDate];
            singleOfDataListElement.textContent = outputText;
            dataListElement.appendChild(singleOfDataListElement);
        };
    };

buttonDisplayUserDataElement.addEventListener('click', displayUserData);



const rollDiceButtonElement = document.querySelector('#statistics button');

    function rollDice () {
        return (Math.floor(Math.random() * 6) + 1);
    };

    function driveNumberOfRolledDice (event) {
        const inputDiceNumberElement = document.getElementById('user-target-number');
        const dataRolledList = document.getElementById('dice-rolls');
        const targetNumberRolled = inputDiceNumberElement.value;

        let hasRolledNumber = false;
        let numberOfRolls = 0;
        dataRolledList.innerHTML = '';

        while (!hasRolledNumber) {
            const rolledNumber = rollDice();
            numberOfRolls++;
            const singleOfDataRolledList = document.createElement('li');
            const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;
            singleOfDataRolledList.textContent = outputText;
            dataRolledList.appendChild(singleOfDataRolledList);
            hasRolledNumber = rolledNumber == targetNumberRolled;
        };

        const outputTargetNumberElement = document.getElementById('output-target-number');
        const outputTotalRollsElement = document.getElementById('output-total-rolls');

        outputTargetNumberElement.textContent = targetNumberRolled;
        outputTotalRollsElement.textContent = numberOfRolls;

    };

rollDiceButtonElement.addEventListener('click', driveNumberOfRolledDice );