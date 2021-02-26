import React from 'react';
import StyledComponent from './StyledComponent';
//      change^               change^

const Component = (props) => {
  //   change^^
  return(
    <StyledComponent>
      {/* change^^ */}
      test from Component.js
    </StyledComponent>
    // change^^
  )
};

export default Component;
//              change^^
