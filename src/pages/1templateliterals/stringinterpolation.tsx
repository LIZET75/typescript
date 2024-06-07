import React from "react";
// String interpolation
// const name = 'John';
// const age = 30;
// const message = `My name is ${name} and I am ${age} years old.`;
// function Greetings() {
//         return <div>{message}</div> ;
// }
// console.log(message);
// Output: "My name is John and I am 30 years old."

// export default Greetings;
//this returns the Greetings in the browser and in the console.

//TESTING CONSOLELOG THE GREETING FUNCTION
// const name = 'John';
// const age = 30;
// const message = `My name is ${name} and I am ${age} years old.`;
// function Greetings() {
//         return <div>{message}</div>;
// }
// console.log(Greetings);

// export default Greetings;
// this function does not export Greetings into the console when using div in the return, console does not return the message.

//PLACING THE TEMPLATE LITERAL INTO THE RETURN:
const name = 'John';
const age = 29;
const message = `My name is ${name} and I am ${age} years old.`;
function Greetings() {
        return (`My name is ${name} and I am ${age} years old.`);
}
console.log(Greetings());

export default Greetings;
//Worked!.  console.log only expells the function when there are no <div></div>