// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstButtonElement = document.querySelector("button");
//    - Select the second button by using an "id"
const secondButtonElement = document.getElementById("second-button-add");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

function actionButtonRemoveClick() {
  console.dir(firstButtonElement);
}
firstButtonElement.addEventListener("click", actionButtonRemoveClick);

//    - Output the second button WITHOUT using the variable in which it's stored

function actionButtonAddClick(event) {
  const buttonElement = event.target;
  console.dir(buttonElement);
}
secondButtonElement.addEventListener("click", actionButtonAddClick);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const firstParagraphElement = document.body.children[2].children[1];
console.log(firstParagraphElement);
const thirdParagraphElement =
  firstParagraphElement.nextElementSibling.nextElementSibling;
console.log(thirdParagraphElement);
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function actionButtonRemoveClick() {
  thirdParagraphElement.remove();
  console.dir(firstButtonElement);
}
firstButtonElement.addEventListener("click", actionButtonRemoveClick);

//    - The second button changes the background color of the first paragraph to blue
function actionButtonAddClick(event) {
  firstParagraphElement.style.backgroundColor = "blue";
  const buttonElement = event.target;
  console.dir(buttonElement);
}
secondButtonElement.addEventListener("click", actionButtonAddClick);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!con

function actionButtonRemoveClick() {
  //   thirdParagraphElement.className = "changeremove";
  thirdParagraphElement.classList.add("changeremove");
  console.dir(firstButtonElement);
}
firstButtonElement.addEventListener("click", actionButtonRemoveClick);
//----------------------------------------------------------
function actionButtonAddClick(event) {
  //   firstParagraphElement.className = "changecolor";
  firstParagraphElement.classList.add("changecolor");
  const buttonElement = event.target;
  console.dir(buttonElement);
}
secondButtonElement.addEventListener("click", actionButtonAddClick);
