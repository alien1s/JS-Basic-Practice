// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice

let courseName = "Zone";

//    - A variable that stores the price of that course

let coursePrice = 5000 + "$";

//    - A variable that stores the three main goals that you have, when taking this course

let courseGoals = ["learn", "study", "bulid"];

// 2) Output ("alert") the three variable values
alert("myCourse name is:");
alert(courseName);
alert("myCourse price is:");
alert(coursePrice);
alert("myCourse goals is:");
alert(courseGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter

let myCourse = {
  name: "Zone",
  price: 5000 + "$",
  goals: ["learn", "study", "bulid"],
};

alert("myCourse data is:");
alert(JSON.stringify(myCourse));
alert("myCourse name is:");
alert(myCourse.name);
alert("myCourse price is:");
alert(myCourse.price);
alert("myCourse goals is:");
alert(myCourse.goals);

// 4) Also output the second element in your "main goals" variable
alert("myCourse main goals is:");
alert(myCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getListitems(array, number) {
  let arrayIndex = number - 1;
  let arrayElement = array[arrayIndex];
  return arrayElement;
}
// 6) Execute your custom command from (5) and output ("alert") the result

let FristGoal = getListitems(courseGoals, 1);
alert(FristGoal);

FristGoal = getListitems(myCourse.goals, 1);
alert(FristGoal);
