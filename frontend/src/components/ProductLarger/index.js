import React from 'react';
import { Container, ContentSale, Promo, Price } from './style';
import { Link } from 'react-router-dom';

function ProductLarger(props) {
  return (
    <Container>
      <Link to="/anuncio">
        <img src={props.photoProductLarger} alt={props.title} />
        <h3>{props.title}</h3>
        {props.promo ? (
          <ContentSale>
            <Promo> {`R$ ${props.price},00`}</Promo>
            <Price> {`R$ ${props.promo},00`}</Price>
          </ContentSale>
        ) : (
          <Price>{`R$ ${props.price},00`}</Price>
        )}
      </Link>
    </Container>
  );
}
export default ProductLarger;
