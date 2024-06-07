import React from 'react';
//EXERCISE
// const dateNumber = new Date().getTime(); // returns a number
// const dateString = new Date().toString(); // returns a string

// const timesList: (string | number)[] = [dateNumber, dateString];
//To create a union that supports multiple types for an array's value, the union is wrap in parentheses (string|number), then array notation[]
//One last thing: the parentheses are vitally important to type arrays correctly. If we left out the parentheses and wrote string | number[], that type would allow strings or arrays of only numbers.

//WORKED EXAMPLE
function formatListings(listings:(string|number)[]) {
    return listings.map((listing) => {
      if (typeof listing === 'string') {
        return listing.toUpperCase();
      }
  
      if (typeof listing === 'number') {
        return `$${listing.toLocaleString()}`;
      }
    });
  }
  
  const result = formatListings([
    '123 Main St',
    226800,
    '580 Broadway Apt 4a',
    337900,
  ]);
  
  console.log(result);
  export default formatListings;
  //parameter listings was modified to type(string|number)[]