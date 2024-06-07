import React from "react";


 // EXAMPLE WORKED OUT

  // function proclaim(status?: string, repeat?: number) {
  //   for (let i = 0; i < repeat || 0; i += 1) {
  //     console.log(`I'm ${status || 'not ready...'}`);
  //   }
  // }
  
  // proclaim();
  // proclaim('ready?');
  // proclaim('ready!', 3);

  // export default proclaim;
  //The above function works the same as the below function bc the parameter is optional

  //MODIFIED TO DEFAULT W/O ? 
  function proclaim(status = "not ready", repeat=1) {for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
};

proclaim();
proclaim('ready?');
proclaim('ready!', 3);

export default proclaim;