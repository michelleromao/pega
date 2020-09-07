import React from 'react';

import { Container } from './style';
import Erro from '../../assets/icons/error.svg';

function Error(props) {
  return (
    <Container>
      <img src={Erro} alt="Ops! Um erro." />
      <p>{props.text}</p>
    </Container>
  );
}
export default Error;
