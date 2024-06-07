import React from 'react';

function myClass() {
    function handleHover() {
      alert('I am an event handler.');
      alert('I will be called in response to "hover" events.')
    }
      return (
        <div>
            {/* <button onClick={handleClick}/></button> */}
        <button onDoubleClick={handleHover} >
          
        this is doubleClick
        </button>
        </div>
      );
  };
    
  
  export default myClass