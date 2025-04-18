let age = 27; 
let userName = 'Saif' ;
let favHoppy = 'chess'
let hoppies = ['Cooking', favHoppy, 1998, 'phsics'];
// alert(hoppies[1]);
// alert(age);

let jop = {
    title: 'developer',
    place: ['new york', 'new jerssy'],
    salary: 50000
}

// alert(jop.place[1]);

let jopVar = jop;

// let person = {
//     ageNumber: age,
//     Name: userName,
//     hoppiesList: hoppies,
//     jopInfo: jop
// } 

let person = {
    age,
    userName,
    hoppies,
    jopVar
} 

console.log(person);

// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let courseName = 'web development';
//    - A variable that stores the price of that course
let coursePrice = 10 + '$';
//    - A variable that stores the three main goals that you have, when taking this course
let courseGoal = ['goal1','goal2','goal3'];
// 2) Output ("alert") the three variable values
alert(courseName);
alert(coursePrice);
alert(courseGoal);
// 3) Try "grouping" the three variables together and still output their values thereafter
let courseData = {
    courseName,
    coursePrice,
    courseGoal
};
alert(JSON.stringify(courseData));
alert(courseData.courseName);
alert(courseData.coursePrice);
alert(courseData.courseGoal);
// 4) Also output the second element in your "main goals" variable
alert(courseGoal[1]);
// 5) Add a custom command (function) that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should b e dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getTheProperty(number,array){
    let index = number - 1;
    let elementIndex = array[index];
    return(elementIndex);
}
// 6) Execute your custom command from (5) and output ("alert") the result

alert(getTheProperty(1,courseGoal));