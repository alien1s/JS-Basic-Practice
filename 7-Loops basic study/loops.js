//------for loop------
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// --------for..of----------

const users = ["Saif", "Mamd007", "Mahmoud"];

for (const user of users) {
  console.log(user);
}

//--------for loop in arrays----------

//Years ago, we didn't have the for-of loop in JavaScript.
//To still loop through all the elements of an array, this code could be used:

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

//This code still works today and you can absolutely use it instead of using a for-of loop. 
// But of course it's longer and a bit more clunky, 
// so there is no strong reason to use that code, unless you prefer it.

//------------for...in loop-----------

const loggedInUser = {
    name: 'Saif',
    age: 27,
    isAdmin: true
}

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
};

//-------------while loop----------

