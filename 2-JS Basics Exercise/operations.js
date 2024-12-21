// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 ^ 4);
console.log(10 % 4); // 10 / 4 => 2 * 4 => Remainder: 2
console.log(10 % 3); // Expected Remainder: 1

console.log((10 + 3 - 5) * 10);

console.log("Max" + " " + "Schwarzmüller");
console.log("Max" - "ax");

let userName = "Max";
console.log(userName.length);
console.log(userName.toUpperCase());

let hobbies = ["Sports", "Cooking"];
console.log(hobbies.length);


// In this module (and also in the next module), we always work on one *.js file only and we only include (link) one *.js file at the same time to our HTML file.

// That's not a must-do though!

// If you build more complex websites, that might required different scripts that do different things, you can absolutely include multiple, separate script files into one and the same *.html file.

// You can simply add multiple <script src="..."> elements into your HTML document:

// <head>
//     <script src="first-script.js"></script>
//     <script src="second-script.js"></script>
// </head>
// </body>
// ...
//     <script src="third-script.js"></script>
// </body>
// The linked scripts will be parsed and executed in the order you defined in the HTML file. It also doesn't matter whether you link them in your <head> section or your <body> section (or if you do both, as shown in this example).

// You can also define functions or variable in file A and use them in file B, though you should make sure that the file where you define them is included (linked) before the file where you use them.

// So in the example above, we could define a variable in first-script.js:

// let myName = 'Max';
// and then use it in second-script.js:

// console.log(myName);
