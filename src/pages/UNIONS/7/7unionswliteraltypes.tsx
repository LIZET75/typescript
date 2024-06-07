import React from 'react';

//EXERCISE EXPLANATION
type Color = 'green' | 'yellow' | 'red';
function changeLight(color: Color) {
    console.log(`the color is ${color}`)
  }
  export default changeLight;

//PRACTICE EXERCISE
// type Status = 'idle' | 'downloading' | 'complete';

// function downloadStatus(status:Status) {
// if (status === 'idle') { 
//  console.log('Download');
// }
// if (status === 'downloading') { 
//  console.log('Downloading');
// }
// if (status === 'complete') { 
//  console.log('Your download is complete!');
// }
// }
// console.log(downloadStatus('complete'));
// export default downloadStatus;