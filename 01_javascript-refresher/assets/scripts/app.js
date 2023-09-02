////IMPORTING/EXPORTING////////
// import { apiKey1, apiKey2 as content } from "./utils.js";
// // we need to add extension with js as there's no build processor
// //or
// //import * as utils from "./utils.js";
// import defKey from "./utils.js";
// //default value from utils

// console.log(apiKey1);

//////////FUNCTION/////////

// //Anonymous function
// export default () => {
//   "default return";
// };

// //Arrow function
// let func1 = (number) => ({ num: number });

//////////OBJECTS & CLASSES///////////
// const user = {
//     name: 'Max',
//     age: 23,
//     greet() {
//         console.log("Hello");
//     }
// }

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`hello, ${this.name}`);
//     }
// };
// const user1 = new User('Bhanu', 21);
// user1.greet()


// ///////////////////ARRAYS////////////////

// const hobbies = ["sports","Art", "Gardening",54];
// console.log(hobbies[3]);

// hobbies.push("gym");
// console.log(hobbies.findIndex(item=>item==="Art"));

// const hob = hobbies.map(item=>({name:item}));
// console.log(hob);

/////////////////DESTRUCTURING///////////////

// let [name,age] = ["Bhanu", 21]; //random variables
// let {n:naam,a} = {n:"Diara", a:16}; //variables->keys or alias //same with function para

///////////////SPREAD AND REST OPERATORS//////////

//Spread operator -> expands elements
//Rest operator -> compress elements


// //spread operator

// let hobbies1 = ["sports","Art", "Gardening",54]
// let hobbies2 = ["gym"]

// console.log([...hobbies1, ...hobbies2]); //[ 'sports', 'Art', 'Gardening', 54, 'gym' ]
// console.log([hobbies1, hobbies2]); //[ [ 'sports', 'Art', 'Gardening', 54 ], [ 'gym' ] ]

// const User = {
//     name: 'Max',
//     age: 23,
//     greet() {
//         console.log("Hello");
//     }
// };

// const extendedUser = {
//     ...User,
//     isAdmin: true,
// }

// console.log(extendedUser)

//Rest operator

// function func(...args) {
//     //statements
// }




///////////FOR LOOP///////////
// let hobbies1 = ["sports","Art", "Gardening",54];
// for (const hobby of hobbies1) {
//     console.log(hobby);
// }

//////////FUNCTIONS AS VALUES//////////

// //inbuilt
// function habdleTimeout() {
//     console.log("timeoutt");
// }

// setTimeout(habdleTimeout, 3000);

// //user defined
// function greet(greeting){
//     greeting();
// }

// function sayHello(){
//     console.log('Hello there!');
// }

// greet(sayHello);


////////////FUNCTION IN A FUNCTION//////////

// function init(){
//     function random(){
//         console.log('Random function');
//     }

//     random();
// }
// init();