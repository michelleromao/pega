import React, { useEffect, useState } from 'react';
import { Container, ContentSale, Promo, Price } from './style';
import { Link } from 'react-router-dom';
import api from '../../services/api';
function ProductLarger(props) {
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
      <Link to={`/anuncio/${props.id}`}>
        <img
          src={`http://localhost:3333/files/announcement/${photoProduct}`}
          alt={props.title}
        />
        <h3>{props.title}</h3>
        {props.promo !== ' ' ? (
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
export default ProductLarger;
