import React from 'react';
type User = {
    id: number;
    username: string;
  };
  
  function createUser() {
    const randomChance = Math.random() >= 0.5;
  
    if (randomChance) {
      return { id: 1, username: 'nikko' };
    } else {
      return 'Could not create a user.';
    }
  }
  
  const userData:User|string = createUser();
  console.log(createUser())
  // console.log(userData)

  export default createUser;