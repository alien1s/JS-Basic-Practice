const myName = 'Saif';

if (myName == 'Saif') {
    console.log('Hello');
}

 let isLogedIn = true;

 if (isLogedIn) {
    console.log('User is loged in');
 } else if (!isLogedIn) {
    console.log('User is NOT loged in!');
 }


 let enterdUserName = ' ';


 if (enterdUserName ) { // <= the condition is equal to (enterdUserName.length > 0)
    console.log('Input Is Valid');
 };

 if (enterdUserName) {
    console.log('its TRUE value');
 } else if (!enterdUserName) {
    console.log('its FALSE value');
 };



 for (let i=0; i<= 10; i++) {
    console.log(i);
 };

 for (let i=0; i<= 10; i++) {
    const slogan = 'I\'m Alien';
    console.log(slogan);
 };

 for (let i=0; i< 10; i+=5) {
    const slogan = 'I\'m Alien';
    console.log(slogan);
 };

 for (let i=10; i>0; i-=5) {
    const slogan = 'I\'m Alien2';
    console.log(slogan);
 };

 let someArray =['a','b','c',1,2,3];
 for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
 };


 for (const element of someArray) {
    console.log(element);
 };
    


 const loggedInUser = {
    name:'Sword',
    age:27,
    isAdmin: true
 };
 
 console.dir(loggedInUser);

 for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
 }

//  let bodyVar = document.body;

//  for (const propertyName in bodyVar) {
//     console.log(propertyName);
//  }



let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you wanna quit?');
}

console.log('Done!');








