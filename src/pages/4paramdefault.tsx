import React from 'react';

//Setting the parameter to a default
function Greet(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
  }
  
  Greet();
  Greet('Andy?');
  

  export default Greet

  //The function greet() can receive a string or undefined as its name parameter—if any other type is provided as an argument, TypeScript will consider that a type error.
  //This is a cleaner way of getting the same functionality we had in the previous exercise. There, we used ? to mark the name parameter as optional. But parameters with default values don’t need a ? after their name, since assigning a default value already implies that they’re optional parameters.


 