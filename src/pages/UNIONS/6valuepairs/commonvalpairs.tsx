import React from 'react';

// type Goose = { 
//     isPettable: boolean; 
//     hasFeathers: boolean;
//     canThwartAPicnic: boolean;
//   }
  
//   type Moose = {
//     isPettable: boolean; 
//     hasHoofs: boolean;
//   }
  
//   const pettingZooAnimal: Goose | Moose = { isPettable: true };
  
//   console.log(pettingZooAnimal.isPettable); // No TypeScript error
//   console.log(pettingZooAnimal.hasHoofs); // TypeScript error

  //Like before, since .isPettable is on both Goose and Moose types, TypeScript will allow us to call it. But since .hasHoofs is only a property on Moose, we cannot call that method on pettingZooAnimal. Any properties or methods that are not shared by all of the union’s members won’t be allowed and will produce a TypeScript error.

  //WORKED EXAMPLE
  type Like = {
    username: string;
    displayName: string;
  };
  
  type Share = {
    username: string;
    displayName: string;
  };
  
  function getFriendNameFromEvent(event:Like|Share) {
    return event.displayName || event.username;
  }
  
  const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
  };
  
  const friendName = getFriendNameFromEvent(newEvent);
  
  console.log(`You have an update from ${friendName}.`);
  // displayName had to be added to type Share for the fuction to avoid returning errors bc the properties need to be the same in all types.