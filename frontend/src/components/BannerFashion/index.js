import React from 'react';
//import './style.css';
import {
  Container,
  ContentVertical,
  ContentColumn,
  ContentHorizontal,
} from './style';

function BannerFashion() {
  return (
    <Container>
      <ContentVertical pink>
        <p>Roupinhas da moda</p>
      </ContentVertical>
      <ContentVertical>
        <p>Roupinhas da moda</p>
      </ContentVertical>
      <ContentColumn>
        <ContentHorizontal blue>
          <p>Roupinhas da moda</p>
        </ContentHorizontal>
        <ContentHorizontal>
          <p>Roupinhas da moda</p>
        </ContentHorizontal>
      </ContentColumn>
    </Container>
  );
}
export default BannerFashion;
