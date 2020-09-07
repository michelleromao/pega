import React from 'react';
import { Container, Content } from './style';

function BannerSlide(props) {
  return (
    <Container>
      <Content>
        <img src={props.photo} alt={props.alt} />
        <figcaption>
          <h1>{props.title}</h1>
          <button>Ver anuncios</button>
        </figcaption>
      </Content>
    </Container>
  );
}
export default BannerSlide;
