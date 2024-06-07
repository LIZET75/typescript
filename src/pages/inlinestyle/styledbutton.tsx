import React from 'react';

function Button(props:any) {
    return (
      <button style={{fontSize:'10px', backgroundColor: '#4CAF50',padding: '15px 32px', margin : '4px 2px'}} onClick={props.onClick}>
        Click me!
      </button>
    );
}

export default Button;
