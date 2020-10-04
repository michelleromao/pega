import React from 'react';
import { Container, ContentSale, Promo, Price } from './style';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../services/api';
import { useState } from 'react';

function ProductSmall(props) {
  const [photoProduct, setPhotoProduct] = useState();
  useEffect(() => {
    async function loadPhoto() {
      const photo = await api.get(`/photosannouncement/${props.id}`);
      setPhotoProduct(photo.data[0].originalname[0]);
    }
    loadPhoto();
  }, []);
  return (
    <Container>
      <Link
        to="/redirect"
        onClick={() => {
          localStorage.setItem('id', props.id);
        }}
      >
        <img
          src={`http://localhost:3333/files/announcement/${photoProduct}`}
          alt={props.title}
          width={250}
          height={250}
        />
        <h3>{props.title}</h3>
        {props.promo ? (
          <ContentSale>
            <Promo> {`R$ ${props.price}`}</Promo>
            <Price> {`R$ ${props.promo}`}</Price>
          </ContentSale>
        ) : (
          <Price>{`R$ ${props.price}`}</Price>
        )}
      </Link>
    </Container>
  );
}
export default ProductSmall;
