// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); // p a { color: red; }
anchorElement.href = "https://academind.com";

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElenment = document.createElement("a");
console.dir(newAnchorElenment);
newAnchorElenment.href = "https://google.com";
newAnchorElenment.textContent = "This is a new link";

// 2. Get access to the parent element that should hold the new element
let fristParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

fristParagraph.append(newAnchorElenment);

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let secondParagraph = document.querySelector(".main-p");

// 2. Remove it!

secondParagraph.remove();

// MOVE ELEMENTS

let H1Element = document.querySelector("h1");

H1Element.parentElement.append(H1Element);

// inner HTML

let anotherParagraph = document.createElement("p");
anotherParagraph.innerHTML =
  "Hi this is <strong>Important!</strong> " + "It's very <span>important</span>";
document.body.append(anotherParagraph);