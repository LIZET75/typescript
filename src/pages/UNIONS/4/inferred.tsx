import React from 'react';
// function getBook() {
//     try {
//       return getBookFromServer();
//     } catch (error) {
//       return `Something went wrong: ${error}`;
//     }
//   }
//   export default getBook;

  //WORKED EXAMPLE
  type User = {
    id: number;
    username: string;
  };
  type UserCreationResponse = User | string;
  

  function createUser() {
    const randomChance = Math.random() >= 0.5;
  
    if (randomChance) {
        //return a User Object
      return { id: 1, username: 'nikko' };
    } else {
        //Return a string
      return 'Could not create a user.';
    }
  }
  
  const userData:UserCreationResponse = createUser();
  export default createUser;