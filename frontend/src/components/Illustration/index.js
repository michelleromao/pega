import React, { useState } from 'react';
import { Container, Content } from './style';

function Illustration(props) {
  return (
    <Container>
      <img src={props.illustrate} alt={props.alt} />
      <Content>
        <h2>{props.title}</h2>
        <p> {props.content}</p>
      </Content>
    </Container>
  );
}
export default Illustration;
