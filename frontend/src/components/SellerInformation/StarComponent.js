import React, { useState } from 'react';
import Star from '../../assets/icons/Estrela';

function StarComponent({ children }) {
  const chi = React.Children.count(children);
  console.log(chi);
  return <>{children}</>;
}
export default StarComponent;
