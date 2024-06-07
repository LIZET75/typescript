import React from 'react';

function greet(name?: string) {
    console.log(`Hello, ${name || 'Anonymous'}!`);
  }
 greet(); // TypeScript Error: Expected 1 arguments, but got 0. 
  greet('Anders'); // Prints: Hello, Anders!
  

export default greet

// ? To indicate that a parameter is intentionally optional, we add a ? after its name. This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.