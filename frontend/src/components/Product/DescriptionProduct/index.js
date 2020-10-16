import React from 'react';
//import './style.css';
import { Container } from './style';

function DescriptionProduct(props) {
  return (
    <Container>
      <h3>Descrição</h3>
      <p>{props.description}</p>
    </Container>
  );
}
export default DescriptionProduct;
