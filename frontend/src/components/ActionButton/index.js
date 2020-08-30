import React from 'react';

import { Container } from './style';

function ActionButton(props) {
  return (
    <>
      <Container>{props.text}</Container>
    </>
  );
}
export default ActionButton;
