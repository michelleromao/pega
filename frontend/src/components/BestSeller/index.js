import React from 'react';
import { Container } from './style';

function BestSeller(props) {
  return (
    <Container>
      <img src={props.photoUser} alt={`${props.nameSeller} é vendedor top!`} />
      <p>{props.nameSeller}</p>
    </Container>
  );
}
export default BestSeller;
