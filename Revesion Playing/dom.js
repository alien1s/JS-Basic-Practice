console.dir(document);
// let anchorElement = document.body.children[1].children[0];
// anchorElement.href = 'http://google.com';

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'http://google.com';

// let anchorElement = document.querySelector('#external-link');
// anchorElement.href = 'http://google.com';

// let anchorElement = document.getElementsByClassName('external-class')[0];
// anchorElement.href = 'http://google.com';

// let anchorElement = document.querySelector('.external-class');
// anchorElement.href = 'http://google.com';

// let anchorElement = document.getElementsByTagName('a')[0];
// anchorElement.href = 'http://google.com';

// let anchorElement = document.querySelector('a');
// anchorElement.href = 'http://google.com';

let anchorElement = document.querySelector('p a');
anchorElement.href = 'http://google.com';



// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

let h1ElementByDrilling = document.body.firstElementChild;
// let h1ElementByDrilling = document.body.children[0];
// let h1ElementByDrilling = document.body.childNodes[1];
console.log(h1ElementByDrilling);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

console.dir(h1ElementByDrilling);
let bodyElement = h1ElementByDrilling.parentElement;
console.dir(bodyElement);

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

let siblingElement = h1ElementByDrilling.nextElementSibling;
console.dir(siblingElement);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let h1ElementById = document.getElementById('first-head');
console.dir(h1ElementById);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

let paragraphElement = document.querySelector('.only-paragraph')
console.dir(paragraphElement);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

paragraphElement.childNodes[0].textContent = 'this is a Link after changed text by JS code ';


// Add a new element


// 1. Create the new element

let newAnchorElement = document.createElement('a');
console.dir(newAnchorElement);
newAnchorElement.textContent = 'link2';
newAnchorElement.href = 'http://google.com';

// 2. Get access to the parent element that should hold the new element

let newParagraphElement = document.createElement('p');
console.dir(newParagraphElement);
newParagraphElement.textContent = 'this is ';

//  3. Insert the new element into the parent element content

newParagraphElement.append(newAnchorElement);

document.body.append(newParagraphElement);


// REMOVE ELEMENTS

// paragraphElement.remove();
paragraphElement.parentElement.removeChild(paragraphElement);

 
// MOVE ELEMENTS

// newParagraphElement.parentElement.insertBefore(newParagraphElement,h1ElementByDrilling)
document.body.insertBefore(newParagraphElement,h1ElementByDrilling);



let clickParagraph = document.getElementById('click-paragraph');


function removeClickedElement(){
    clickParagraph.remove();
    document.body.append(newClickedParagraph);
    console.log(1);
};


function changeClickedElement(){
    clickParagraph.textContent = 'Clicked';
    console.log('paragraph clicked!');
};


clickParagraph.addEventListener('click', changeClickedElement);

let newClickedParagraph = document.createElement('p');
newClickedParagraph.textContent = 'this paragraph clicked';

function returnClickedElement(){
    newClickedParagraph.remove();
    document.body.append(clickParagraph);
    console.log(2);
};

newClickedParagraph.addEventListener('click', returnClickedElement);


let inputElement = document.querySelector('input');


function executInputContent (event) {
    // let inputContent = inputElement.value;
    let inputContent = event.target.value;
    // let inputContent = event.data;
    console.log(inputContent);
};

inputElement.addEventListener('input',executInputContent);

console.dir(inputElement);


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


h1ElementById.style.color = ('rgb(23,45,667');

h1ElementById.style.fontSize = ('4rem');

h1ElementById.style.textAlign = ('center');

clickParagraph.classList='style-js-class';

newParagraphElement.classList.add('style-js-class') ;

const divOfProductNameSection = document.querySelector('.control');
divOfProductNameSection.classList.remove('control');
divOfProductNameSection.classList.add('return');




// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!


const mainRemoveParagraphButtonElement = document.querySelector('main button');
console.log(mainRemoveParagraphButtonElement);

const mainChangeParagraphBackgroundColorButtonElement = document.getElementById('seconed-main-button');
console.log(mainChangeParagraphBackgroundColorButtonElement);

const firstParagraphWillRemoved = document.body.children[2].children[2].children[3];
console.log(firstParagraphWillRemoved);

const seconedtParagraphWillBackgroundChanged = document.body.children[2].children[2].children[5];
console.log(seconedtParagraphWillBackgroundChanged);


function mainRemoveParagraph () {
    console.dir(mainRemoveParagraphButtonElement);
    // firstParagraphWillRemoved.remove();
    firstParagraphWillRemoved.classList.add('remove-class');
};
mainRemoveParagraphButtonElement.addEventListener('click', mainRemoveParagraph);


function mainChangeParagraphBackgroundColor (event) {
    console.dir(event.target);
    // event.target.previousElementSibling.style.backgroundColor = 'blue';
    event.target.previousElementSibling.classList.add('changebackclass');
};
mainChangeParagraphBackgroundColorButtonElement.addEventListener('click', mainChangeParagraphBackgroundColor);



