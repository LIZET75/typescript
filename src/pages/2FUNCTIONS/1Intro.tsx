
import React from 'react';
// function printLengthOfText(text) {
//     console.log(text.length);
//   }
  
//   printLengthOfText(3); // Prints: undefined
//   printLengthOfText('3'); // Prints: 1
//   printLengthOfText('number'); // Prints: 6
//   export default printLengthOfText;

//In jS functions can be invoked with unexpected argument types. in case of placing numbers in the functions I will get an undefined.

//SECOND EXAMPLE
function printLengthOfText(text) {
    if (typeof text !== 'string') {
      throw new Error('Argument is not a string!');
    }
  
    console.log(text.length);
  }
  
  printLengthOfText(3); // Error: Argument is not a string!
  export default printLengthOfText;
//The function needs to be writen so that it checks the argument type and produce an error when a string is not a parameter..  