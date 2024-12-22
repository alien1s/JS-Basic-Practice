for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// ------------------

const users = ["Saif", "Mamd007", "Mahmoud"];

for (const user of users) {
  console.log(user);
}

//------------------

//Years ago, we didn't have the for-of loop in JavaScript.
//To still loop through all the elements of an array, this code could be used:

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

//This code still works today and you can absolutely use it instead of using a for-of loop. 
// But of course it's longer and a bit more clunky, 
// so there is no strong reason to use that code, unless you prefer it.

//-----------------------
