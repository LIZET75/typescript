import React from "react";
// Regular string
function regularString() {
    return('Hello there! \n' +
                     'Welcome to our website. \n' +
                     'How can we help you today?');
};

// Template literal
export function templateLiteral() {
    return (`Hello there! Welcome to our website. How can we help you today?`)};

console.log(regularString());
console.log(templateLiteral());

export default templateLiteral;
// the first function is in 3 lines
// the second function is in 2 lines